import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from '../components/home/Home'
import Products from "../components/products/Products";


export default props => (

    <Routes>
        <Route exact path='/' element={< Home />} />
        <Route path="*" element = { < Home />} />
        <Route path='/products' element={< Products />} />

    </Routes>
);  