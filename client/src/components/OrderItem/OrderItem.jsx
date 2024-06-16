import { dateFormatter } from "../../js/dateFormatter";
import "./OrderItem.css";

export default function OrderItem({ order, number, setOrder }) {
  const orderObj = order;  // No need for order[0] since it's already a single order object
  return (
    <div className="order-item">
      <div className="past-order-details">
        <h3>Order Nr. {number + 1}</h3>
        <p>Placed On: {dateFormatter(orderObj.created)}</p>
      </div>
      <div className="line-div"></div>
      <div className="past-order-details">
        <p className="cost-p">Total: ${orderObj.totalCost.toFixed(2)}</p>
        <button 
          type="button" 
          className="base-btn"
          onClick={() => setOrder(orderObj)}
        >
          See Order Details
        </button>
      </div>
    </div>
  );
}
