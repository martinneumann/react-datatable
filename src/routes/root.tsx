import React from "react";
import Header from "../components/header/header";
import { Navigate, Outlet, redirect } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header></Header>
      <Navigate to={"/data"}></Navigate>
      <Outlet />
    </>
  );
}
