const axiosInstance = require("../lib/axios.lib");
const { validateSearchImages } = require("../validations/index");

const searchImages = async (req, res) => {
  const errors = validateSearchImages(req.query);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  try {
    const { query } = req.query;

    const response = await axiosInstance.get(`/search/photos?query=${query}`);

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: "failed to fetch images." });
  }
};

module.exports = { searchImages };
