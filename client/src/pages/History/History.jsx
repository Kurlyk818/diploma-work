import { useFetch } from "../../js/useFetch";
import { setOrder } from "../../redux/orderDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./History.css";

export default function History () {
    const { data, isError, isLoading } = useFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (isLoading) return <Loading />
    if (isError) return <ErrorPage />

    const handleSetOrderDetails = (order) => {
        dispatch(setOrder(order));
        navigate("/selected-order");
    }

    return (
        <div className="orders-frame">
            <h2>Client Order History</h2>
            {data.map((item, i) => (
                <OrderItem
                    key={i}
                    order={[item]}
                    number={i}
                    setOrder={handleSetOrderDetails}/>
            ))}
        </div>
    )
}