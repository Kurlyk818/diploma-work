import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { postContent } from "../../js/postContent";
import { productsUrl } from "../../js/endpoints";
import "./ProductCreator.css";

export default function ProductCreator() {
    const [ingredients, setIngredients] = useState([]);
    const [allergens, setAllergens] = useState([]);
    const nameRef = useRef(), typeRef = useRef(), imageRef = useRef(), ingredientRef = useRef(), allergenRef = useRef(), priceRef = useRef(), amountRef = useRef();
    const dispatch = useDispatch(), navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(ingredients.length < 1) return;

        const product = {
            name: nameRef.current.value,
            type: typeRef.current.value,
            imageUrl: imageRef.current.value,
            ingredients: ingredients,
            alergens: allergens,
            price: priceRef.current.value,
            amount: amountRef.current.value
        }

        postContent(product, productsUrl)
            .then(() => dispatch(fetchProducts()))
            .then(() => navigate("/admin"));
    }

    return (
        <div className="creator-frame">
            <h2>Створити новий продукт</h2>
            <form onSubmit={handleFormSubmit} className="creator-form">
                <div className="creator-div">
                    <label htmlFor="name">Назва: </label>
                    <input type="text" name="name" placeholder="Пиріг" required ref={nameRef}/>
                </div>
                <div className="creator-div">
                    <label htmlFor="type">Тип: </label>
                    <input type="text" name="type" placeholder="десерт" required ref={typeRef}/>
                </div>
                <div className="creator-div">
                    <label htmlFor="imageUrl">Фото: </label>
                    <input type="text" name="imageUrl" placeholder="https://imageUrl" required ref={imageRef}/>
                </div>
                <div className="list-div">
                    <div className="item-list">
                        <p>Інградієнти: </p>
                        <div className="listing">
                            {ingredients.length > 0 ? ingredients.map((ingredient, i) => (
                                <p key={i}>
                                    {ingredient}
                                    <span onClick={() => setIngredients(prev => prev.filter((_, index) => index !== i))}>
                                        X
                                    </span>
                                </p>
                            )) : null}
                        </div>
                    </div>
                    <div className="adder-div">
                        <label htmlFor="ingredient">Інградієнти: </label>
                        <div className="adder-div-div">
                            <input type="text" name="ingredient" placeholder="Помідор" ref={ingredientRef} />
                            <button
                                type="button"
                                className="base-btn"
                                onClick={() => {
                                    const newIngredient = ingredientRef.current.value.trim();
                                    if (newIngredient !== "") {
                                        setIngredients(prev => [...prev, newIngredient]);
                                        ingredientRef.current.value = "";
                                    }
                                }}>
                                Додати
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-div">
                    <div className="item-list">
                        <p>Алергени: </p>
                        <div className="listing">
                            {allergens.length > 0 ? allergens.map((allergen, i) => (
                                <p key={i}>
                                    {allergen}
                                    <span onClick={() => setAllergens(prev => prev.filter((_, index) => index !== i))}>
                                        X
                                    </span>
                                </p>
                            )) : null}
                        </div>
                        
                    </div>
                    <div className="adder-div">
                        <label htmlFor="alergen">Алергени: </label>
                        <div className="adder-div-div">
                            <input type="text" name="alergen" placeholder="Глютен" ref={allergenRef} />
                            <button
                                type="button"
                                className="base-btn"
                                onClick={() => {
                                    const newAllergen = allergenRef.current.value.trim();
                                    if (newAllergen !== "") {
                                        setAllergens(prev => [...prev, newAllergen]);
                                        allergenRef.current.value = "";
                                    }
                                }}>
                                Додати
                            </button>
                        </div>
                    </div>
                </div>
                <div className="creator-div">
                    <label htmlFor="price">Ціна: </label>
                    <input type="number" name="price" placeholder="100" required ref={priceRef}/>
                </div>
                <div className="creator-div">
                    <label htmlFor="amount">Кількість: </label>
                    <input type="number" name="amount" placeholder="2" required ref={amountRef}/>
                </div>
                <div className="creator-submit">
                    <button type="submit" className="base-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}