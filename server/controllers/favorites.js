const Favorite = require("../db/favorite.model");

const getFavoritesProduct = async (req, res) => {
    try {
      const favorites = await Favorite.find();
      return res.json(favorites);
    } catch (err) {
      serverErrorHandler(res, err);
    }
  }

 const newFavoriteProduct = async (req, res) => {
    try {
      const newFavorite = new Favorite(req.body);
      const savedFavorite = await newFavorite.save();
      return res.status(201).json(savedFavorite);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  const deleteFavoriteProduct = async (req, res) => {
    const favoriteId = req.params.id;
  
    try {
      const favorite = await Favorite.findOneAndDelete({ _id: favoriteId });
  
      if (!favorite) {
        return res.status(404).json({ message: "Favorite not found" });
      }
      return res.status(200).json({ massage: "Favorite deleted" });
    } catch (err) {
      serverErrorHandler(res, err);
    }
  }


  module.exports = { getFavoritesProduct, newFavoriteProduct, deleteFavoriteProduct };



