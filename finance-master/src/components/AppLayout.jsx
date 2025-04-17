import BalanceCard from "./BalanceCard";
import Header from "./Header";
import RecentTransaction from "./RecentTransaction";
import SummaryCard from "./SummaryCard";
import Footer from "./Footer";
// import { Outlet } from "react-router-dom";
export default function AppLayout() {
    return (
      <div className="app-container">
        <Header />
        {/* <Outlet /> */}
        <BalanceCard />
        <RecentTransaction />
        <SummaryCard/>
        <Footer/>
      </div>
    );
  }