import { useRef } from "react";
import "./Filter.css";

export default function Filter({ allergens, filter, search }) {
    const selectElement = useRef();
    const inputElement = useRef();

    return (
        <div className="filter">
            <div className="selector">
                <h3>Видалити все з: </h3>
                <select 
                    name="filter-out-allergen"
                    title="Filter out by allergen" 
                    className="filter-out-allergen"
                    onChange={() => filter(inputElement, selectElement)}
                    ref={selectElement}
                >
                    <option>-- Дивитись усі --</option>
                    {allergens.map((allergen, i) => (
                        <option key={i}>{allergen}</option>
                    ))}
                </select>
            </div>
            <input
                type="search"
                name="search"
                className="search"
                placeholder="Search..."
                ref={inputElement}
                onChange={() => search(inputElement)} 
            />
        </div>
    )
}