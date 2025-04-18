import { useRef } from "react";
import "./OrderForm.css";

export default function OrderForm( {handleSubmit}) {
    const nameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();

    return (
        <form onSubmit={(e) => handleSubmit(e, nameRef, addressRef, phoneNumberRef)} className="order-form">
            <h3>Деталі замовлення</h3>
            <div className="client-details-1">
                <label htmlFor="name">Ім'я: </label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Sherlock Holmes"
                    ref={nameRef}
                    required />
            </div>
            <div className="client-details-2">
                <label htmlFor="email">Телефон: </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="+380981234567"
                    ref={phoneNumberRef}
                    required />
            </div>
            <div className="client-details-3">
                <label htmlFor="address">Адреса: </label>
                <input 
                    type="text"
                    name="address"
                    id="address"
                    placeholder="221B Baker Street"
                    ref={addressRef}
                    required />
            </div>
            <div className="order-btn-div">
                <button
                    type="submit"
                    className="base-btn">
                    Замовити
                </button>
            </div>
        </form>
    )
}