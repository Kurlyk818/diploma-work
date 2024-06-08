import quotationA from "../../img/quote_a.png";
import quotationB from "../../img/quote_b.png";
import "./Review.css";

export default function Review({ review }) {
    return (
        <div className="review">
            <p>{review[0].name}:</p>
            <p className="quote-body">
                <span className="quotemark">
                    <img src={quotationA} alt="Quotation Mark Start" />
                </span>
                {review[0].review}
                <span className="quotemark">
                    <img src={quotationB} alt="Quotation Mark End" />
                </span>
            </p>
        </div>
    )
}