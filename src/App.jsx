import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BalanceCard from "./components/BalanceCard";
import RecentTransaction from "./components/RecentTransaction";
import AppLayout from "./components/AppLayout";
import SummaryCard from "./components/SummaryCard";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="BalanceCard" element={<BalanceCard />} />
      <Route path="RecentTransaction" element={<RecentTransaction />} />
      <Route path="Summary" element={<SummaryCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
