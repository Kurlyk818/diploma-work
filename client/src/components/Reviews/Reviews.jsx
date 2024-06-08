import Review from "../Review/Review";
import quotes from "./quotes";
import "./Reviews.css";

export default function Reviews() {
    return (
        <div className="reviews-frame">
            <h2>What Clients Say</h2>
            <div className="reviews">
                {quotes.map((quote, index) => (
                    <Review key={index} review={[quote]} />
                ))}
            </div>
        </div>
    )
}