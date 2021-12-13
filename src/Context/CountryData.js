import React, { createContext, useContext, useState } from "react";

export const CountryContext = createContext();

export default function CountryProvider({ children }) {
  const [countryData, setCountryData] = useState([]);

  return (
    <CountryContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryData() {
  const context = useContext(CountryContext);
  const { countryData, setCountryData } = context;
  return { countryData, setCountryData };
}
