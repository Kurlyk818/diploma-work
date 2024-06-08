import { useNavigate } from "react-router-dom";
import pizza from "../../img/pizza.webp";
import desserts from "../../img/desserts.webp";
import salads from "../../img/salads.webp";
import drinks from "../../img/drinks.webp";
import "./Menu.css";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <section className="main-menu">
            <div className="pizza-info infos" onClick={() => navigate("/pizza")}>
                <img src={pizza} alt="Pizza" />
                <div>
                    <h2>Pizza</h2>
                    <p> - expert hand-kneaded dough </p>
                    <p> - gluten free alternatives </p>
                    <p> - vegan alternatives </p>
                    <p> - quality in every bite</p>
                    <p> - wide range of toppings </p>
                </div>
            </div>
            <div className="desserts-info infos" onClick={() => navigate("/desserts")}>
                <img src={desserts} alt="Pizza" />
                <div>
                    <h2>Desserts</h2>
                    <p> - traditional oven-baked </p>
                    <p> - locally sourced fruits </p>
                    <p> - milk from casein A2 cows only </p>
                    <p> - enriched with essential vitamins </p>
                    <p> - team led by Reonaldo Di Alfonso (celebrity baker)</p>
                </div>
            </div>
            <div className="salads-info infos" onClick={() => navigate("/salads")}>
                <img src={salads} alt="Pizza" />
                <div>
                    <h2>Salads</h2>
                    <p> - fresh in any season</p>
                    <p> - for every 50 salads sold, we plant a tree </p>
                    <p> - devoted to excellence, promoting healthier eating</p>
                </div>
            </div>
            <div className="drinks-info infos" onClick={() => navigate("/drinks")}>
                <img src={drinks} alt="Pizza" />
                <div>
                    <h2>Drinks</h2>
                    <p> - low alcoholic content </p>
                    <p> - fresh and flavorful</p>
                    <p> - happiness in a bottle</p>
                </div>
            </div>
        </section>
    )
}