import wrongPizza from "../../img/wrong_pizza.webp";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="notice">
      <div>
        <h2>Oh no!</h2>
        <img src={wrongPizza} alt="Melting Pizza Slice" className="error-img" />
      </div>
      <h1>Something didn't work as intended.</h1>
      <div className="notice-action">
        <h3>Better return</h3>
        <button type="button" className="base-btn"
          onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
}