import "./Summary.css";

export default function Summary({ productsTotal, shipping, discount, total }) {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="price-item">
                <p><strong>Products Cost:</strong></p>
                <p>${productsTotal.toFixed(2)}</p>
            </div>
            <div className="price-item">
                <p><strong>Shipping Cost:</strong> </p>
                <p className="extra-cost">+${shipping}</p>
            </div>
            <div className="price-item">
                <p><strong>Discounts:</strong></p>
                <p className="less-cost">-${discount}</p>
            </div>
            <div className="price-item">
                <p><strong>Total:</strong> </p>
                <p>${total}</p>
            </div>
        </div>
    )
}