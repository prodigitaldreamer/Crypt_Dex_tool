const express = require('express');
const router = express.Router();
const axios = require('axios');
const token = require('../../models/Token');

router.get('/time', async (req, res) => {
  try {
    res.json(Number(new Date()));
  } catch (error) {}
});

router.get('/symbols', async (req, res) => {
  try {
    const data = {
      name: 'TFUEL',
      'exchange-traded': 'NasdaqNM',
      'exchange-listed': 'NasdaqNM',
      timezone: 'America/New_York',
      minmov: 1,
      minmov2: 0,
      pointvalue: 1,
      session: '0930-1630',
      has_intraday: false,
      visible_plots_set: 'ohlcv',
      description: 'Apple Inc.',
      type: 'stock',
      supported_resolutions: ['D', '2D', '3D', 'W', '3W', 'M', '6M'],
      pricescale: 100,
      ticker: 'TFUEL',
      logo_urls: ['https://s3-symbol-logo.tradingview.com/apple.svg'],
      exchange_logo: 'https://s3-symbol-logo.tradingview.com/country/US.svg'
    };
    res.json(data);
  } catch (error) {}
});
// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', async (req, res) => {
  try {
    // Make an API request to fetch token data
    const response = await axios.get(
      'https://swap-api.thetatoken.org/swap/top-tokens'
    );
    const fetchedTokens = response.data.body.tokens;
    const data = await axios.get(
      'https://assets.thetatoken.org/wallet-metadata/v1/data.json'
    );

    const tokens = fetchedTokens.map((obj) => {
      const token =
        data.data.mainnet.tokens[
          Object.keys(data.data.mainnet.tokens).find(
            (id) => id.toLocaleLowerCase() === obj.id
          )
        ];

      if (token) {
        return {
          ...obj,
          logo: `https://assets.thetatoken.org/tokens/${token.logo}`
        };
      }
      return obj;
    });
    // const posts = await Post.find().sort({ date: -1 });
    res.json({ ...tokens, success: 'ok' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
