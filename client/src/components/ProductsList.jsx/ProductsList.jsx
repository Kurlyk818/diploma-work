import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../redux/productDetailsSlice";
import { filterByType, filterOutByString, filterByPhrase } from "../../js/filtering";
import { addProductToCart } from "../../redux/cartSlice";
import { getAllergenList } from "../../js/getAllergenList";
import Loading from "../../pages/Loading/Loading";
import ErrorPage from "../../pages/Error/ErrorPage";
import Product from "../../components/Product/Product";
import Filter from "../../components/Filter/Filter";
import "./ProductsList.css";
import InfoMessage from "../InfoMessage/InfoMessage";

export default function ProductsList({ productType }) {
    const productsState = useSelector(state => state.productList);
    const [data, setData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [showAddedProduct, setShowAddedProduct] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const showProductDetails = (product) => {
        dispatch(setProduct([product]));
        navigate("/product-details");
    }

    useEffect(() => {
        setData(filterByType(productsState.products, productType));
        setFilteredProducts(filterByType(productsState.products, productType));
        setProducts(filterByType(productsState.products, productType));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    const filterByAllergen = (input, select) => {
        const optionName = select.current.value;
        input.current.value = "";
        setFilteredProducts(data);
        setProducts(data);

        if (optionName === "--Дивитись усі --") return;
        setFilteredProducts(prev => filterOutByString(prev, optionName));
        setProducts(prev => filterOutByString(prev, optionName));
    }

    const searchByName = (input) => {
        const searchPhrase = input.current.value.toLowerCase();
        setProducts(filteredProducts);
        setProducts(prev => filterByPhrase(prev, searchPhrase));
    };

    const handleAddToCart = (product) => {
        if (isAuthenticated) {
            dispatch(addProductToCart(product));
            setShowAddedProduct(true); 
            setTimeout(() => {
                setShowAddedProduct(false); 
            }, 3000);
          } else {
            navigate("/login");
          }
       
    }

    return (
        <section className="product-list">
            <Filter
                allergens={getAllergenList(data)}
                filter={filterByAllergen}
                search={searchByName}
            />
            <div className="listed-products">
                {products.map((product) => (
                    <Product
                        key={product._id}
                        product={[product]}
                        showDetails={() => showProductDetails(product)}
                        addToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
            <InfoMessage show={showAddedProduct} message="Продукт доданий до корзини" />
        </section>
    );
}
