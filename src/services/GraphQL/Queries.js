import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query GetCountriesData {
    Country {
      _id
      name
      population
      capital
      area
      flag {
        emoji
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export const COUNTRY_DETAILS = gql`
  query GetCountryData($country_id: String!) {
    Country(_id: $country_id) {
      _id
      area
      population
      capital
      topLevelDomains {
        name
      }
      distanceToOtherCountries {
        countryName
        distanceInKm
      }
      name
      flag {
        emoji
      }
    }
  }
`;
