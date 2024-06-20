import { dateFormatter } from "../../js/dateFormatter";
import "./ClientsOrderItem.css";

export default function ClientOrderItem({ order, number, setOrder }) {
    const orderObj = order[0];

    return (
        <div className="order-item">
            <div className="past-order-details">
                <p className="order-id">Замовлення {orderObj._id}</p>
            
                <p>Розміщене: {dateFormatter(orderObj.created)}</p>
                <p>Для {orderObj.client.name}</p>
            </div>
            <div className="line-div"></div>
            <div className="past-order-details">
                <p className="cost-p">Всього: {orderObj.totalCost} грн</p>
                <button 
                type="button" 
                className="base-btn"
                onClick={() => setOrder(order)}>
                    Дивитись деталі
                </button>
            </div>
        </div>
    )
}