import Routes from "../src/router/routes";

import CountriesProvider from "./Context/CountriesData";
import CountryProvider from "./Context/CountryData";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://testefront.dev.softplan.com.br/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <CountriesProvider>
        <CountryProvider>
          <ApolloProvider client={client}>
            <Routes />
          </ApolloProvider>
        </CountryProvider>
      </CountriesProvider>
    </>
  );
}

export default App;
