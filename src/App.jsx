import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BalanceCard from "./components/BalanceCard";
import AppLayout from "./components/AppLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="BalanceCard" element={<BalanceCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
