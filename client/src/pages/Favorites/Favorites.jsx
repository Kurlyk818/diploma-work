import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeProductFromFavorites } from "../../redux/favoriteSlice";
import { deleteOneItem } from "../../js/deleteOneItem";
import { favoritesUrl } from "../../js/endpoints";
import Favorite from "../../components/Favorite/Favorite";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import "./Favorites.css";
import Sort from "../../components/Sort/Sort";

export default function Favorites() {
    const favoriteState = useSelector(state => state.favoriteList);
    const [favorites, setFavorites] = useState([]);
    const [sortedFavorites, setSortedFavorites] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setFavorites(favoriteState.favorites);
        setSortedFavorites(favoriteState.favorites);
    }, [favoriteState.favorites]);

    if (favoriteState.loading) return <Loading />;
    if (favoriteState.error) return <ErrorPage />;

    const sorter = (select) => {
        const optionName = select.current.value;
    
        setSortedFavorites(favorites);
        if (optionName === "-- Не сортовано --") return;
        if (optionName === "ASC") {
            setSortedFavorites((prev) => {
                return [...prev].sort((a, b) => a.name.localeCompare(b.name));
            });
        } else {
            setSortedFavorites((prev) => {
                return [...prev].sort((a, b) => b.name.localeCompare(a.name));
            });
        }
    };

    return (
        <div className="favorites-menu">
            <div className="favorites-bar">
                <h2>Вподобання |</h2>
                <Sort sort={sorter} />
            </div>
            <div className="favorites">
                {sortedFavorites.map(favorite => (
                    <Favorite
                        key={favorite._id}
                        favorite={[favorite]}
                        deleteFavorite={() => {
                            dispatch(removeProductFromFavorites(favorite));
                            deleteOneItem(favoritesUrl, favorite._id);
                        }}/>
                ))}
            </div>
        </div>
    )
}