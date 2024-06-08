export const matchToProductInStock = (productInCart, generalProducts) => {
    return generalProducts.filter(product => product._id === productInCart._id)[0];
}