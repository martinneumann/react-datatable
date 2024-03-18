import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
