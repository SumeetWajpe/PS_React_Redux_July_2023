import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.component";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
