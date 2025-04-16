import BalanceCard from "./BalanceCard";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
    return (
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    );
  }