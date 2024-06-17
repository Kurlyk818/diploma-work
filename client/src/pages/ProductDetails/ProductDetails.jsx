import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/cartSlice";
import { addProductToFavorites, removeProductFromFavorites } from "../../redux/favoriteSlice";
import { getQuantityInCart } from "../../js/getQuantityInCart";
import { isInFavorites } from "../../js/IsItemInFavorites";
import { favoritesUrl } from "../../js/endpoints";
import { postContent } from "../../js/postContent";
import { deleteOneItem } from "../../js/deleteOneItem";
import { productAmountGreaterThanProductQuantity } from "../../js/productAmountGreaterThanProductQuantity";
import heartEmpty from "../../img/heart_empty.png";
import heartFull from "../../img/heart_full.png";
import cart from "../../img/shopping_cart.png";
import unavailableCart from "../../img/shopping_cart_unavailable.png";
import "./ProductDetails.css";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import InfoMessage from "../../components/InfoMessage/InfoMessage";

export default function ProductDetails() {
    const detailsState = useSelector(state => state.product.details);
    const favoritesState = useSelector(state => state.favoriteList);
    const productsInCart = useSelector(state => state.cart.products);
    const {token} = useSelector(state => state.user); 

    const _id = useSelector(state => state.user.user?._id );
    const [favorites, setFavorites] = useState([]);
    const [showAddedProduct, setShowAddedProduct] = useState(false);
    let productToDisplay = detailsState[0] ;
    const productName = detailsState[0].name;
    const inStock = detailsState[0].amount;
    const dispatch = useDispatch();

    useEffect(() => {
        setFavorites(favoritesState.favorites);
    }, [favoritesState.favorites]);

    if(favoritesState.loading) return <Loading />;
    if(favoritesState.error) return <ErrorPage />;

    const handleAddToCart = (product) => {
        if(productAmountGreaterThanProductQuantity(productsInCart, productToDisplay)) {
            dispatch(addProductToCart(product));
            setShowAddedProduct(true); 
            setTimeout(() => {
                setShowAddedProduct(false); 
            }, 3000);
        }
    }
    
    return (
        <div className="product-details-frame">
            <img src={isInFavorites(favorites, productToDisplay) ? heartFull : heartEmpty} alt="Empty Heart" className="liked" />
            <>
            {detailsState.length > 0 ? (
                <div className="product-details">
                    <div className="details-1">
                        <h2>{productName}</h2>
                        <img src={productToDisplay.imageUrl} alt={productName} className="detail-img"/>
                    </div>
                    <div className="details-2">
                        <div className="in-stock">
                            <h3>In Stock: {inStock}</h3>
                        </div>
                        <div className="ingredients">
                            <h3>Ingredients:</h3>
                            <p>{productToDisplay.ingredients.map((ingredient, index) => (
                                <span key={index}>{ingredient}, </span>
                            ))}</p>
                        </div>
                        <div className="allergens">
                            <h3>Allergens:</h3>
                            <p>
                                {productToDisplay.alergens.length > 0 ? (
                                    productToDisplay.alergens.map((allergen, index) => (
                                        <span key={index}>{allergen}, </span>
                                    ))
                                ) : (
                                    "None"
                                )}
                            </p>
                        </div>
                        <div className="interaction-btns">
                            <div className="add-or-remove-btns">
                                <button 
                                    type="button" 
                                    className="decrement-btn"
                                    onClick={() => dispatch(removeProductFromCart(productToDisplay))}
                                    disabled={inStock === 0}>
                                    -
                                </button>
                                <p>{getQuantityInCart(productsInCart, productToDisplay) ? 
                                    getQuantityInCart(productsInCart, productToDisplay) : "0"}
                                </p>
                                <button 
                                    type="button" 
                                    className="increment-btn" 
                                    onClick={() => handleAddToCart(productToDisplay)}
                                    disabled={inStock === 0}>
                                    +
                                </button>
                                <img src={inStock === 0 ? unavailableCart : cart} alt="Cart" className="cart-rep"/>
                            </div>
                            {isInFavorites(favorites, productToDisplay) ? (
                                <button type="button" className="base-btn"
                                    onClick={() => {
                                        productToDisplay = {...productToDisplay, user: _id};
                                        dispatch(removeProductFromFavorites(productToDisplay));
                                        deleteOneItem(favoritesUrl, productToDisplay._id, token);
                                    }}>
                                    Remove From Favorites
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="base-btn"
                                    onClick={() => {
                                        productToDisplay = {...productToDisplay, user: _id};
                                        dispatch(addProductToFavorites(productToDisplay));
                                        
                                        postContent(productToDisplay, favoritesUrl);

                                    }}>
                                    Add to Favorites
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
            </>
            <InfoMessage show={showAddedProduct} message="Product Added to Cart" />
        </div>
    )
}