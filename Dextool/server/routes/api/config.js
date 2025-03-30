const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date: -1 });
    const config = {
      supports_search: true,
      supports_group_request: false,
      supports_marks: true,
      supports_timescale_marks: true,
      supports_time: true,
      exchanges: [{ value: '', name: 'All Exchanges', desc: '' }],
      symbols_types: [{ name: 'All types', value: '' }],
      supported_resolutions: ['D', '2D', '3D', 'W', '3W', 'M', '6M']
    };
    res.json({ ...config });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
