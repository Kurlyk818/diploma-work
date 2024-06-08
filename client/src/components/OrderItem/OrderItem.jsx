import { dateFormatter } from "../../js/dateFormatter";
import "./OrderItem.css";

export default function OrderItem({ order, number, setOrder }) {
    const orderObj = order[0];

    return (
        <div className="order-item">
            <div className="past-order-details">
                <h3>Order Nr. {number+1}</h3>
                <p>Placed On: {dateFormatter(orderObj.created)}</p>
            </div>
            <div className="line-div"></div>
            <div className="past-order-details">
                <p className="cost-p">Total: ${orderObj.totalCost}</p>
                <button 
                type="button" 
                className="base-btn"
                onClick={() => setOrder(order)}>
                    See Order Details
                </button>
            </div>
        </div>
    )
}