import { Outlet, useNavigation } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export async function loader() {
  return {};
}

export default function Root() {

  return (
    <>
        <Nav></Nav>
        <div className="flex flex-row justify-center">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  );
}
