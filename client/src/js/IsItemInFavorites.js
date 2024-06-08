export const isInFavorites = (favorites, compareItem) => {
    const foundFavorite = favorites.find(product => product._id === compareItem._id);

    if(foundFavorite) return true;
    return false;
}