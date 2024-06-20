import { useFetch } from "../../js/useFetch";
import { setOrder } from "../../redux/orderDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import ClientOrderItem from "../../components/OrderItem/ClientsOrderItem";
import "./History.css";
import { useState } from "react";

export default function History() {
  const { data, isError, isLoading } = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const handleSetOrderDetails = (order) => {
    dispatch(setOrder(order));
    navigate("/selected-admin-order");
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

  return (
    <div className="orders-frame">
      <h2>Історія замовлень клієнтів</h2>
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
      {sortedData.map((item, i) => (
        <ClientOrderItem key={i} order={[item]} number={i} setOrder={handleSetOrderDetails} />
      ))}
    </div>
  );
}
