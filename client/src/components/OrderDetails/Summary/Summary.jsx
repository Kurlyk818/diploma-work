import "./Summary.css";

export default function Summary({ productsTotal, shipping, discount, total }) {
    return (
        <div className="order-summary">
            <h3>Підсумок замовлення</h3>
            <div className="price-item">
                <p><strong>Вартість товарів:</strong></p>
                <p>{productsTotal.toFixed(2)} грн</p>
            </div>
            <div className="price-item">
                <p><strong>Вартість доставки:</strong> </p>
                <p className="extra-cost">+{shipping} грн</p>
            </div>
            <div className="price-item">
                <p><strong>Знижка:</strong></p>
                <p className="less-cost">-{discount} грн</p>
            </div>
            <div className="price-item">
                <p><strong>Всього:</strong> </p>
                <p>{total} грн</p>
            </div>
        </div>
    )
}