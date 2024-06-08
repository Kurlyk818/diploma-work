export const productAmountGreaterThanProductQuantity = (productsInCart, productToDisplay) => {
    const cartProduct = productsInCart.filter(item => item.name === productToDisplay.name);
    if(cartProduct[0]) {
        return productToDisplay.amount > cartProduct[0].quantity;
    }
    return true;
}