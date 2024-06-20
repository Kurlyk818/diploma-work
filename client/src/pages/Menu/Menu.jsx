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
                <img src={pizza} alt="Піца" />
                <div>
                    <h2>Піца</h2>
                    <p> - експертне тісто, замішане вручну </p>
                    <p> - безглютенові альтернативи </p>
                    <p> - веганські альтернативи </p>
                    <p> - якість в кожному шматочку</p>
                    <p> - широкий вибір начинок </p>
                </div>
            </div>
            <div className="desserts-info infos" onClick={() => navigate("/desserts")}>
                <img src={desserts} alt="Десерти" />
                <div>
                    <h2>Десерти</h2>
                    <p> - традиційно випечені в духовці </p>
                    <p> - фрукти з місцевих джерел </p>
                    <p> - молоко тільки від корів з казеїном A2 </p>
                    <p> - збагачені необхідними вітамінами </p>
                    <p> - команда під керівництвом Ла Белла Чіназеса (знаменитий пекар)</p>
                </div>
            </div>
            <div className="salads-info infos" onClick={() => navigate("/salads")}>
                <img src={salads} alt="Салати" />
                <div>
                    <h2>Салати</h2>
                    <p> - свіжі в будь-яку пору року</p>
                    <p> - за кожні 50 проданих салатів ми садимо дерево </p>
                    <p> - віддані досконалості, сприяючи здоровому харчуванню</p>
                </div>
            </div>
            <div className="drinks-info infos" onClick={() => navigate("/drinks")}>
                <img src={drinks} alt="Напої" />
                <div>
                    <h2>Напої</h2>
                    <p> - низький вміст алкоголю </p>
                    <p> - свіжі та ароматні</p>
                    <p> - щастя в пляшці</p>
                </div>
            </div>
        </section>
    )
}
