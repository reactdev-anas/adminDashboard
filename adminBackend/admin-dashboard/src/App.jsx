import React from "react";
import AdminLayout from "./components/layout/AdminLayout";
import Authentication from "./components/Authentication";
import "./App.css"

function App() {
  // check token from localStorage
  const token = localStorage.getItem("adminToken");

  return (
    <>
      {token ? <AdminLayout /> : <Authentication />}
    </>
  );
}

export default App;