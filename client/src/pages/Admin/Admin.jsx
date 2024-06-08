import "./Admin.css";
import ProductsTable from "../../components/Table/ProductsTable";
import AddButton from "../../components/Table/AddButton/AddButton";

export default function Admin() {

    return (
        <div className="admin">
            <AddButton />
            <ProductsTable />
        </div>
    )
}