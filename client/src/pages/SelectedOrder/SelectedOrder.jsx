import { useSelector } from "react-redux";
import { dateFormatter } from "../../js/dateFormatter";
import "./SelectedOrder.css";

export default function SelectedOrder() {
    const orderDetails = useSelector(state => state.order.details);

    return (
        <div className="selected-order">
            <div className="top-details">
                <div className="order-summary-details">
                    <p><strong>Ordered on:</strong> {dateFormatter(orderDetails[0].created)}</p>
                </div>
                <div className="delivery-details">
                    <p><strong>For:</strong> {orderDetails[0].client.name}</p>
                    <p><strong>Address:</strong> {orderDetails[0].client.address}</p>
                </div>
            </div>
            <div className="product-listing">
                {orderDetails[0].products.map((item, i) => (
                    <div key={i} className="order-product">
                        <div className="pd1" key={i}>
                            <img src={item.imageUrl} alt={item.name} className="order-pic-details"/>
                            <p>{item.name}</p>
                        </div>
                        <div className="pd2">
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <p>Ordered: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="full-order-summary">
                <p><strong>Products Total:</strong> ${orderDetails[0].totalCost.toFixed(2)}</p>   
            </div>
        </div>
    )
}