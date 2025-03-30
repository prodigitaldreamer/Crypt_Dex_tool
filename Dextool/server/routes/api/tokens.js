const express = require('express');
const router = express.Router();
const axios = require('axios');
const Token = require('../../models/Token');
const checkImg = require('../../utils/check');

const RandomAvatar = (size) => {
  const randomColor = () =>
    '#' + Math.floor(Math.random() * 8388607 + 8388607).toString(16);
  const randomRotation = () => Math.random() * 360;
  const randomPosition = () => ({
    x: Math.random() * size * 0.7,
    y: Math.random() * size * 0.7
  });

  const rectangles = Array.from({ length: 3 }).map((_, index) => {
    const color = randomColor();
    const rotation = randomRotation();
    const position = randomPosition();

    return `<rect
        key="${index}"
        x="${0}"
        y="${0}"
        width="100%"
        height="100%"
        transform="${`translate(${position.x} ${
          position.y
        }) rotate(${rotation} ${size / 2} ${size / 2})`}"
        fill="${color}"
      />`;
  });

  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" fill="${randomColor()}" />
      ${rectangles.join('')}
    </svg>`;
};

const svg2img = (size = 100) =>
  `data:image/svg+xml;base64,${Buffer.from(RandomAvatar(size)).toString(
    'base64'
  )}`;

function removeW(word) {
  if (word.startsWith('w') || word.startsWith('W')) {
    return word.slice(1); // Remove the first character
  } else {
    return word; // Return the original string
  }
}

router.get('/', async (req, res) => {
  try {
    // Fetch token data from MongoDB
    const existingTokens = await Token.find({});
    const existingTokenMap = new Map(
      existingTokens.map((token) => [token.id.toLowerCase(), token])
    );

    // Fetch token data from external APIs
    const response = await axios.get(
      'https://swap-api.thetatoken.org/swap/top-tokens'
    );
    const fetchedTokens = response.data.body.tokens;
    const data = await axios.get(
      'https://assets.thetatoken.org/wallet-metadata/v1/data.json'
    );

    // Iterate through each fetched token
    const tokens = await Promise.all(
      fetchedTokens.map(async (obj) => {
        const lowerCaseId = obj.id.toLowerCase();
        if (existingTokenMap.has(lowerCaseId)) {
          return existingTokenMap.get(lowerCaseId); // Return existing token
        }

        const tokenData =
          data.data.mainnet.tokens[
            Object.keys(data.data.mainnet.tokens).find(
              (id) => id.toLowerCase() === lowerCaseId
            )
          ];

        let logo;
        if (tokenData) {
          logo = `https://assets.thetatoken.org/tokens/${tokenData.logo}`;
        } else {
          const imgExist = await checkImg(obj.symbol.toLowerCase()); // Ensure checkImg is asynchronous if needed
          logo = imgExist
            ? `https://assets.thetatoken.org/tokens/${removeW(
                obj.symbol
              ).toLowerCase()}.png`
            : svg2img();
        }

        const token = {
          id: obj.id,
          name: obj.name,
          symbol: obj.symbol,
          derivedETH: obj.derivedETH,
          tradeVolume: obj.tradeVolume,
          tradeVolumeETH: obj.tradeVolumeETH,
          untrackedVolumeETH: obj.untrackedVolumeETH,
          totalLiquidity: obj.totalLiquidity,
          txCount: obj.txCount,
          volume24HrsETH: obj.volume24HrsETH,
          volume24HrsUSD: obj.volume24HrsUSD,
          tradeVolumeUSD: obj.tradeVolumeUSD,
          totalLiquidityUSD: obj.totalLiquidityUSD,
          derivedUSD: obj.derivedUSD,
          logo: logo,
          start_date: obj.start_date,
          date: obj.date
        };

        // Save the new token to the database
        const savedToken = await new Token(token).save();

        return savedToken;
      })
    );

    res.json({ tokens, success: 'ok' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
