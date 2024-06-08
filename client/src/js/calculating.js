const calculateDiscountAmount = (total, voucher) => {
    let discountPercentage = 0;
    if(voucher === "CELEBRATE20") {
        discountPercentage = 10;
    }
    const discountAmount = (total * discountPercentage) / 100;
    return discountAmount.toFixed(2);
}

const calculateShippingCost = (cart, totalCost) => {
    return cart.length > 0 ? (totalCost > 100 ? 0 : 20) : 0;
}

const calculateItemsCost = (itemsArr) => {
    if (itemsArr.length > 0) {
        return itemsArr.reduce((acc, val) => {
            const itemCost = val.price * val.quantity;
            return acc + itemCost;
        }, 0);
    } 
    return 0;
}

const calculateTotalCost = (itemsCost, shipping, discount) => {
    const totalCost = parseFloat(itemsCost) + parseFloat(shipping) - parseFloat(discount);
    return totalCost.toFixed(2);
}


export { calculateDiscountAmount, calculateItemsCost, calculateShippingCost, calculateTotalCost }