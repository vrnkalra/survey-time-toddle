/* eslint-disable implicit-arrow-linebreak */
const router = require('express').Router();

const imageThumbnail = require('image-thumbnail');

// eslint-disable-next-line consistent-return
router.get('/resize', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).send({
        message: 'Please send url of a public image as a query params',
      });
    }
    const options = {
      width: 50,
      height: 50,
      responseType: 'buffer',
      jpegOptions: { force: true },
    };
    const thumbnail = await imageThumbnail({ uri: url }, options);

    res.writeHead(200, {
      'Content-Type': 'image/jpg',
      'Content-Length': thumbnail.length,
    });
    return res.end(thumbnail);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to create user',
    });
  }
});

module.exports = router;
