import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Signin from "./signin";
import Todo from "./Todo";

export default function AlllRoute() {
  return (
    <Routes>
      {/* <Route path={"/"} element={<Home />} /> */}
      <Route path={"/signin"} element={<Signin />} />
      {/* <Route path={"/login"} element={<Login />} /> */}
      
      {/* <Route
        path={"/todo"}
        element={
          <PrivateRoute todo={<Todo />} >
            <Todo />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
}
