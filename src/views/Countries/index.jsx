/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

import { useQuery} from "@apollo/client";
import { COUNTRIES } from "../../services/GraphQL/Queries";

import { useCountriesData } from "../../Context/CountriesData";

import { Col, Row } from "antd";
import { CardCountry } from "../Components/Card";
import { SearchInput } from "../Components/Search";

export default function Countries() {

const {countriesData, setCountriesData} = useCountriesData()

const [searchTerm, setSearchTerm] = useState('')
const [filteredCountriesData, setFilteredCountriesData] = useState([])


const { data } = useQuery(COUNTRIES)

useEffect(() => {    
    const arrayData = [data?.Country]
    setCountriesData(arrayData[0])    
}, [data, setCountriesData])


const handleSearch = async (input) => {
    const filter = countriesData?.filter(country => {
     return country.name.toLowerCase().includes(input.toLowerCase())
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

        filteredCountriesData?.map((country) => {
        return(
            <Col key={country?._id}  xs={{span: 24}} sm={{span: 12}} lg={{span: 8}}>
                <a href={`/${country?._id}`}>
                <CardCountry name={country?.name} flag={country?.flag.emoji} capital={country?.capital} />
                </a>
            </Col>
            )            
        })

        :

        countriesData?.map((country) => {
            return(
                <Col key={country?._id} xs={{span: 24}} sm={{span: 12}} lg={{span: 8}}>
                    <a href={`/${country?._id}`}>
                    <CardCountry name={country?.name} flag={country?.flag.emoji} capital={country?.capital} />
                    </a>
                </Col>
                )            
            })
    }
    </Row>    
    </>
)

}