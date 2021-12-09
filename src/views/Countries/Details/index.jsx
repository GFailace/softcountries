/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

import details from "../../../services/details";

import { Button, Col, Row, Typography } from "antd";


import { CardDetails } from "../../Components/Card/Details";

export default function CountryDetails() {

const { Title } = Typography;
const [countryData, setCountryData] = useState([])

useEffect(() => {    
    fetchData()
}, [])

const param = window.location.pathname.split('/').slice(1);

console.log(param[0])

const fetchData = async () => {
    const response = await details.get({country: param});
    setCountryData(response.data)
}
    console.log(countryData)

return(
    <>
    <Row>
        <Col span={20} style={{margin: '1rem auto'}}>
        {countryData.map((country) => {
            return(
                <>
            <CardDetails
                key={country?.name?.common} 
                area={country?.area}
                capital={country?.capital}
                flag={country?.flag} 
                map={country?.maps?.googleMaps}
                name={country?.name?.common}
                population={country?.population}
            />
            

            <Row>
            <Col span={20} style={{margin: '1rem auto', textAlign: 'center'}}>
            <Title level={2}>Frontiers</Title>
            {country.borders.map((border) => {
                return(
                    <Button>{border}</Button>
                )
            })}
            </Col>
            </Row>
            <Row>
            <Col style={{margin: '1rem auto'}}>
            <Button style={{margin: 'auto 0.5rem'}} type="primary">Editar</Button>
            <Button style={{margin: 'auto 0.5rem'}} onClick={() => {window.location.href = '/'}}>Voltar</Button>
            </Col>
            </Row>
            </>
            )
        })}
        </Col>
    </Row>
    </>
)

}