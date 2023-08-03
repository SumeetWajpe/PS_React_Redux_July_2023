import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
