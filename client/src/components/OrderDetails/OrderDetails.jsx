import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateItemsCost, calculateDiscountAmount, calculateShippingCost, calculateTotalCost } from "../../js/calculating";
import { fetchProducts } from "../../redux/productsSlice";
import { postContent } from "../../js/postContent";
import { patchContent } from "../../js/patchContent";
import { productsUrl, ordersUrl } from "../../js/endpoints";
import { clearCart } from "../../redux/cartSlice";
import { matchToProductInStock } from "../../js/matchToProductInStock";
import { expectedVoucher, setLocalStorageVoucherValue } from "../../js/voucherUtils";
import "./OrderDetails.css";
import OrderForm from "./OrderForm/OrderForm";
import Voucher from "./Voucher/Voucher";
import Summary from "./Summary/Summary";
import InfoMessage from "../InfoMessage/InfoMessage";

export default function OrderDetails( { handleLoading }) {
    const productsInCart = useSelector(state => state.cart.products);
    const products = useSelector(state => state.productList.products);
    const [showRemovalMessage, setShowRemovalMessage] = useState(false);
    const [voucher, setVoucher] = useState(() => {
        const storedVoucher = localStorage.getItem("voucher");
        return storedVoucher ? JSON.parse(storedVoucher) : "";
    });
    const totalProductsCost = calculateItemsCost(productsInCart);
    const shippingCost = calculateShippingCost(productsInCart, totalProductsCost);
    const discounts = calculateDiscountAmount(totalProductsCost, voucher);
    const totalCost = calculateTotalCost(totalProductsCost, shippingCost, discounts);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(productsInCart.length > 0) {
            setLocalStorageVoucherValue(voucher);
        } else {
            setVoucher("");
            setLocalStorageVoucherValue("");
        }
    }, [voucher, productsInCart.length]);

    const handleSubmitForm = (e, nameInput, addressInput, emailInput) => {
        e.preventDefault();

        if(productsInCart.length === 0) return;
        if(productsInCart.some(item => item.quantity === 0)) {
            setShowRemovalMessage(true); 
            return setTimeout(() => {
                setShowRemovalMessage(false); 
            }, 3000);
        }

        handleLoading();
        const order = {
            client: {
                name: nameInput.current.value,
                email: emailInput.current.value,
                address: addressInput.current.value
            },
            products: productsInCart,
            totalCost: totalCost
        }

        postContent(order, ordersUrl)
        .then(() => {
            const patchPromises = productsInCart.map((product) => {
                return patchContent(productsUrl, product._id, {  
                    amount: matchToProductInStock(product, products).amount - product.quantity
                });
            });
    
            return Promise.all(patchPromises);
        })
        .then(() => {
            dispatch(clearCart());
            setVoucher("");
            setLocalStorageVoucherValue("");
            
            return dispatch(fetchProducts());
        })
        .then(() => navigate("/order-complete"))
        .catch((error) => console.error('Error:', error));
    }

    const handleAddVoucher = (input) => {
        const chosenVoucher = input.current.value;
        if(productsInCart.length > 0 && chosenVoucher === expectedVoucher) {
            setVoucher(chosenVoucher);
        }
        input.current.value = "";
    }

    return (
        <div className="order-details">
            <Summary 
                productsTotal={totalProductsCost}
                shipping={shippingCost}
                discount={discounts}
                total={totalCost} />
            <Voucher addVoucher={handleAddVoucher} voucher={voucher}/>
            <OrderForm handleSubmit={handleSubmitForm} />
            <InfoMessage show={showRemovalMessage} message="Remove Unavailable Products"/>
        </div>
    )
}