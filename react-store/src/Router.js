import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from 'page/App'
import Login from "page/Login";
import NotFound from "page/NotFound";
const Router = () =>(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
    </BrowserRouter>
)

export default Router;