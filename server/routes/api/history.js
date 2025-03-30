const express = require('express');
const router = express.Router();
const axios = require('axios');
const ensureSeconds = timestamp => {
  return timestamp.toString().length === 13 ? Math.floor(timestamp / 1000) : timestamp;
};
// GET request to /history
router.get('/', async (req, res) => {
  const { symbol, resolution, from, to, countback } = req.query;

  // Example symbol and resolution mapping to the external API id and interval
  const symbolToIdMap = {
    'TFUEL': 3822,
    // Add more symbol mappings if necessary
  };
  const intervalMap = {
    '1D': '1d',
    // Add more resolution mappings if necessary
  };

  const id = symbolToIdMap[symbol];
  const interval = intervalMap[resolution];

  if (!id || !interval) {
    return res.status(400).json({ error: 'Invalid symbol or resolution' });
  }

  // Calculate the time range for the external API request

  const timeStart = ensureSeconds(parseInt(from));
  const timeEnd = ensureSeconds(parseInt(to));
  const url = `https://api.coinmarketcap.com/data-api/v3.1/cryptocurrency/historical?id=${id}&convertId=2781&timeStart=${timeStart}&timeEnd=${timeEnd}&interval=${interval}`;

  try {
    // Fetch data from the external API
    console.log(url);
    const response = await axios.get(url);
    const quotes = response.data.data.quotes;

    // Transform the fetched data into the desired response format
    const result = {
      t: [],
      o: [],
      h: [],
      l: [],
      c: [],
      v: [],
      s: 'ok'
    };

    quotes.forEach(quote => {
      result.t.push(new Date(quote.timeOpen).getTime() / 1000); // Convert to timestamp in seconds
      result.o.push(quote.quote.open);
      result.h.push(quote.quote.high);
      result.l.push(quote.quote.low);
      result.c.push(quote.quote.close);
      result.v.push(quote.quote.volume);
    });

    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
