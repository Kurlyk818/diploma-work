import "./Favorite.css";

export default function Favorite({ favorite, deleteFavorite }) {
    return (
        <div className="favorite">
            <div className="favorite-1">
                <h3>{favorite[0].name}</h3>
                <img src={favorite[0].imageUrl} alt={favorite[0].name} className="fav-img" />
            </div>
            <div className="favorite-2">
                <div>
                    <button
                        type="button"
                        className="base-btn"
                        onClick={deleteFavorite}>
                        Remove
                    </button>
                </div>
                <div>
                    <h4>Ingredients: </h4>
                    <p>
                        {favorite[0].ingredients.map(item => (
                            <span key={item}>{item}, </span>
                        ))}
                    </p>
                </div>
                <div>
                    <h4>Allergens: </h4>
                    <p>
                        {favorite[0].alergens.length > 0 ? favorite[0].alergens.map(item => (
                            <span key={item}>{item}, </span>
                        )) : "None"}
                    </p>
                </div>
            </div>
        </div>
    )
}