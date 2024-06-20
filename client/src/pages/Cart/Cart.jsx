import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart, removeAllFromCart } from "../../redux/cartSlice";
import { getQuantityInCart } from "../../js/getQuantityInCart";
import { matchToProductInStock } from "../../js/matchToProductInStock";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import Loading from "../../pages/Loading/Loading";

export default function Cart() {
    const productsInCart = useSelector(state => state.cart.products);
    const products = useSelector(state => state.productList.products);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const sortedProductsInCart = [...productsInCart].sort((a, b) => {
        const quantityA = getQuantityInCart(productsInCart, a);
        const quantityB = getQuantityInCart(productsInCart, b);

        if (quantityA === 0 && quantityB !== 0) return -1;
        if (quantityA !== 0 && quantityB === 0) return 1;
        return 0;
    });

    if(loading) return <Loading />

    return (
        <div className="cart-frame">
            <h2>Корзина</h2>
            <div className="order-elements">
                <div className="products-in-cart">
                    {sortedProductsInCart.length > 0 ? sortedProductsInCart.map((product, i) => (
                        <CartProduct key={i}
                            product={[product]}
                            addProduct={() => dispatch(addProductToCart(matchToProductInStock(product, products)))}
                            removeProduct={() => dispatch(removeProductFromCart(product))}
                            removeAll={() => dispatch(removeAllFromCart(product))}
                            quantity={getQuantityInCart(productsInCart, product)}/>
                    )) : (
                        <h3>В корзині немає товарів</h3>
                    )}
                </div>
                <OrderDetails handleLoading={() => setLoading(true)} />
            </div>
        </div>
    )
}
