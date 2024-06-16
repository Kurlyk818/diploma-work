import { setOrder } from "../../redux/orderDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./Client.css";
import { useEffect, useState } from "react";

const FetchClient = async (_id) => {
  const ordersUrl = `http://localhost:8080/orders/${_id}`;
  const controller = new AbortController();

  try {
    const res = await fetch(ordersUrl, { signal: controller.signal });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error fetching data:", err);
      throw err;
    }
  } finally {
    controller.abort();
  }
};

export default function Client() {
  const _id = useSelector((state) => state.user.user?._id);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!_id) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await FetchClient(_id);
        setData(fetchedData);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSetOrderDetails = (order) => {
    dispatch(setOrder(order));
    navigate("/selected-order");
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;
  return (
    <div className="orders-frame">
      <h2>Order History</h2>
      {data && data.length > 0 ? (
        data.map((item, i) => (
          <OrderItem
            key={item._id}
            order={item}
            number={i}
            setOrder={handleSetOrderDetails}
          />
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}
