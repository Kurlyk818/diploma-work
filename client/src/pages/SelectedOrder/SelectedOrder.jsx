import { useSelector } from "react-redux";
import { dateFormatter } from "../../js/dateFormatter";
import "./SelectedOrder.css";

export default function SelectedOrder() {
    const orderDetails = useSelector(state => state.order.details);
    return (
        <div className="selected-order">
            <div className="top-details">
                <div className="order-summary-details">
                    <p><strong>Замовлення:</strong> {dateFormatter(orderDetails.created)}</p>
                </div>
                <div className="delivery-details">
                    <p><strong>Для:</strong> {orderDetails.client.name}</p>
                    <p><strong>Адреса:</strong> {orderDetails.client.address}</p>
                    <p><strong>Номер телефону:</strong> {orderDetails.client.phoneNumber}</p>
                </div>
            </div>
            <div className="product-listing">
                {orderDetails.products.map((item, i) => (
                    <div key={i} className="order-product">
                        <div className="pd1" key={i}>
                            <img src={item.imageUrl} alt={item.name} className="order-pic-details"/>
                            <p>{item.name}</p>
                        </div>
                        <div className="pd2">
                            <p>{(item.price * item.quantity).toFixed(2)} грн</p>
                            <p>Замовлено: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="full-order-summary">
                <p><strong>Загалом:</strong> {orderDetails.totalCost.toFixed(2)} грн</p>   
            </div>
        </div>
    )
}