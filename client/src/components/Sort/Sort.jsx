import { useRef } from "react";
import "./Sort.css";

export default function Sort({ sort }) {
    const selectElement = useRef();

    return (
        <div className="sorter">
            <h3>Sort: </h3>
            <select
                name="sorter"
                id="sorter"
                onChange={() => sort(selectElement)}
                ref={selectElement}>
                <option>-- Unsorted --</option>
                <option>ASC</option>
                <option>DESC</option>
            </select>
        </div>
    )
}