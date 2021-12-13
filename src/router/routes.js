import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Countries from "../views/Countries";
import CountryDetails from "../views/Countries/Details";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:id" element={<CountryDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
