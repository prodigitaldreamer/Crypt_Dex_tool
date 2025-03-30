const express = require('express');
const router = express.Router();
const axios = require('axios');
const TokenPair = require('../../models/TokenPair');
const Token = require('../../models/Token');

router.get('/', async (req, res) => {
  try {
    // Fetch token pairs from MongoDB
    const dbPairs = await TokenPair.find({});
    const dbPairsMap = new Map(dbPairs.map((pair) => [pair.id, pair]));

    // Fetch token pairs from external API
    const response = await axios.get(
      'https://swap-api.thetatoken.org/swap/top-pairs'
    );
    const fetchedPairs = response.data.body.pairs;

    // Iterate through each fetched pair
    const pairs = await Promise.all(
      fetchedPairs.map(async (pairData) => {
        const dbPair = dbPairsMap.get(pairData.id);
        if (dbPair) {
          return await dbPair;
        }

        // Find tokens from the database
        const token0 = await Token.findOne({ id: pairData.token0.id });
        const token1 = await Token.findOne({ id: pairData.token1.id });

        // Create a new token pair with token references
        const newPair = new TokenPair({
          ...pairData,
          token0: token0 ? token0._id : null,
          token1: token1 ? token1._id : null
        });

        // Save the new token pair to the database
        await newPair.save();
        return newPair;
      })
    );

    res.json({
      pairs: await TokenPair.find().populate('token0 token1'),
      success: 'ok'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Extract the token pair ID from the request parameters
    const { id } = req.params;

    // Fetch the token pair details from the database
    const pair = await TokenPair.findOne({ id: id })
      .populate('token0')
      .populate('token1');

    // Check if the pair exists
    if (!pair) {
      return res.status(404).json({ error: 'Token pair not found' });
    }

    // If the pair exists, return it in the response
    res.json({ pair, success: 'ok' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
