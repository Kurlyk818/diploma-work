import { dateFormatter } from "../../js/dateFormatter";
import "./OrderItem.css";

export default function OrderItem({ order, number, setOrder }) {
  const orderObj = order;
  return (
    <div className="order-item">
      <div className="past-order-details">
        <p className="order-id">Замовлення {orderObj._id}</p>
        <p>Розміщене: {dateFormatter(orderObj.created)}</p>
        <p>Для {orderObj.client.name}</p>
      </div>
      <div className="line-div"></div>
      <div className="past-order-details">
        <p className="cost-p">Всього: {orderObj.totalCost.toFixed(2)} грн</p>
        <button type="button" className="base-btn" onClick={() => setOrder(orderObj)}>
          Дивитись деталі
        </button>
      </div>
    </div>
  );
}
