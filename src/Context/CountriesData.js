import React, { createContext, useContext, useState } from "react";

export const CountriesContext = createContext();

export default function CountriesProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);

  return (
    <CountriesContext.Provider value={{ countriesData, setCountriesData }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountriesData() {
  const context = useContext(CountriesContext);
  const { countriesData, setCountriesData } = context;
  return { countriesData, setCountriesData };
}
