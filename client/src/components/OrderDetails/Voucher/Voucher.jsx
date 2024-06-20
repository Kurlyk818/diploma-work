import { useRef } from "react";
import { useSelector } from "react-redux";
import "./Voucher.css";

const expectedVoucher = "CELEBRATE20";

export default function Voucher({ addVoucher, voucher }) {
    const productsInCart = useSelector(state => state.cart.products);
    const inputRef = useRef();
    
    return (
        <div className="voucher">
            <p>Маєте промокод?</p>
            {productsInCart.length > 0 && voucher === expectedVoucher ? (
                <p className="applied-voucher">
                     <i>{expectedVoucher} використано для замовлення.</i>
                </p>
            ) : null}
            <div className="no-voucher">
                <input 
                    type="text" 
                    placeholder="Code..."
                    ref={inputRef} />
                <button
                    type="apply-voucher"
                    className="base-btn"
                    onClick={() => addVoucher(inputRef)}>
                    додати
                </button>
            </div>
        </div>
    )
}