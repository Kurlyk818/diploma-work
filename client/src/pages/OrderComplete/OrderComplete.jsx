import basket from "../../img/basket.webp";
import "./OrderComplete.css";

export default function OrderComplete() {
    return (
        <div className="order-complete">
            <img src={basket} alt="Basket" className="order-basket-img" />
            <h2>Ваше замовлення відправлено!</h2>
        </div>
    )
}