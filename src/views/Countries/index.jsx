/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

import countries from "../../services/countries";

import { Col, Row } from "antd";
import { CardCountry } from "../Components/Card";
import { SearchInput } from "../Components/Search";

export default function Countries() {

const [countriesData, setCountriesData] = useState([])
const [searchTerm, setSearchTerm] = useState('')
const [filteredCountriesData, setFilteredCountriesData] = useState([])

useEffect(() => {    
    fetchData()
}, [])

const fetchData = async () => {
    const response = await countries.get();
    setCountriesData(response.data)
    }

const handleSearch = async (input) => {
    const filter = countriesData.filter(country => {
     return country.name.common.toLowerCase().includes(input.toLowerCase())
    })
    setSearchTerm(input ? input : '');
    setFilteredCountriesData(filter);
} 
    



return(
    <>
    <Row>
        <Col span={12} style={{ margin: '1rem auto' }}>
            <SearchInput input={searchTerm} onChange={handleSearch}/>   
        </Col>
    </Row> 
    <Row gutter={[16, 16]} style={{ margin: '1rem', padding: '1rem' } }>
    { searchTerm ?

        filteredCountriesData.map((country) => {
        return(
            <Col xs={{span: 24}} sm={{span: 12}} lg={{span: 8}}>
                <a href={`/${country?.name.common}`}>
                <CardCountry key={country?.name?.common} name={country?.name?.common} flag={country?.flag} capital={country?.capital} />
                </a>
            </Col>
            )            
        })

        :

        countriesData.map((country) => {
            return(
                <Col xs={{span: 24}} sm={{span: 12}} lg={{span: 8}}>
                    <a href={`/${country?.name.common}`}>
                    <CardCountry key={country?.name?.common} name={country?.name?.common} flag={country?.flag} capital={country?.capital} />
                    </a>
                </Col>
                )            
            })
    }
    </Row>    
    </>
)

}