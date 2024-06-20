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

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

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
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.client.name.toLowerCase().includes(search.toLowerCase()) || item._id.toString().includes(search)
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.created) - new Date(b.created);
    } else {
      return new Date(b.created) - new Date(a.created);
    }
  });


  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;
  return (
    <div className="orders-frame">
      <h2>Історія замовлень</h2>
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Пошук за іменем або id"
          value={search}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Сортування по даті(Від першого до останнього)</option>
          <option value="desc">Сортування по даті(Від останнього до першого)</option>
        </select>
      </div>
      {data && data.length > 0 ? (
        sortedData.map((item, i) => (
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
