export const isProductInCart = (productsInCart, product) => 
    productsInCart.some(item => item.name === product.name);