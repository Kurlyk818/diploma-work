export const getQuantityInCart = (cart, comparisonItem) => {
    const foundProduct = cart.find(product => product._id === comparisonItem._id);

    if (foundProduct && foundProduct.quantity !== undefined) return foundProduct.quantity;
    return null;
}