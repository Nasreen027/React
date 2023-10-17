import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontendLayout from "../components/FrontendLayout/FrontendLayout";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import Home from "../pages/Home";
import Login from "../pages/Login";
function UnAuthenticatedRoutes() {
    return (
        <Routes>
            <Route element={<FrontendLayout />} >
            <Route path={UnAuthenticatedRoutesNames.Home} element = {<Home/>} />
            <Route path={UnAuthenticatedRoutesNames.Login} element = {<Login/>} />
            </Route>
        </Routes>
    )
}
export default UnAuthenticatedRoutes;