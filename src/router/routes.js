import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Countries from "../views/Countries";
import CountryDetails from "../views/Countries/Details";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route exact={true} path="/" element={<Countries />} />
      <Route path="/:country" element={<CountryDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
