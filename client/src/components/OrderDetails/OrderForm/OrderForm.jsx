import { useRef } from "react";
import "./OrderForm.css";

export default function OrderForm( {handleSubmit}) {
    const nameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();

    return (
        <form onSubmit={(e) => handleSubmit(e, nameRef, addressRef, phoneNumberRef)} className="order-form">
            <h3>Client Details</h3>
            <div className="client-details-1">
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Sherlock Holmes"
                    ref={nameRef}
                    required />
            </div>
            <div className="client-details-2">
                <label htmlFor="email">Phone: </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="+380981234567"
                    ref={phoneNumberRef}
                    required />
            </div>
            <div className="client-details-3">
                <label htmlFor="address">Address: </label>
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
                    Order Now
                </button>
            </div>
        </form>
    )
}