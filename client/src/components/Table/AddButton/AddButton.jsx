import { useNavigate } from "react-router-dom";
import "./AddButton.css";

export default function AddButton() {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="base-btn add-new-product-btn"
            onClick={() => navigate("/create-product")}>
            Додати новий продукт
        </button>
    )
}