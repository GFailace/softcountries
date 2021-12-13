/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

import { useCountryData } from "../../../Context/CountryData";

import { useQuery} from "@apollo/client";
import { COUNTRY_DETAILS } from "../../../services/GraphQL/Queries";

import { Button, Col, Form, Input, InputNumber, Modal, Row } from "antd";

import { CardDetails } from "../../Components/Card/Details";

export default function CountryDetails() {

const {countryData, setCountryData} = useCountryData()

const [formData, setFormData] = useState()
const[visible, setVisible] = useState(false)

const param = window.location.pathname.split('/').slice(1);

const { data } = useQuery(COUNTRY_DETAILS,{ variables: {country_id : param.toString()} })

useEffect(() => {    
  const arrayData = [data?.Country[0]]
  setCountryData([[arrayData][0][0]])    
}, [data, setCountryData])

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values) => {
    const formInputData = {
        name: values.name,
        area: values.area,
        population: values.population,
        capital: values.capital,
        domain: values.domain
    }
    setFormData(formInputData)  
    setVisible(false) 
  };

return(
    <>
    <Row>
        <Col span={20} style={{margin: '1rem auto'}}>
        <>
          {!formData ? countryData?.map((country) => {
            return(
                
            <CardDetails
                key={country?._id} 
                area={country?.area}
                capital={country?.capital}
                flag={country?.flag?.emoji} 
                name={country?.name}
                population={country?.population}
                domain={country?.topLevelDomains.map((domain) => {
                  return domain.name
                })}
            />
            )})
            : 
            countryData?.map((country) => {
            return(
            <CardDetails
              key={country?._id}
              flag={country?.flag?.emoji}
              area={formData?.area}
              capital={formData?.capital}
              name={formData?.name}
              population={formData?.population}
              domain={formData?.domain}
          /> 
            )})
            }

            <Row>
             <Col style={{margin: '1rem auto'}}>
              <Button type="primary" onClick={() => setVisible(true)}>
                Edit
              </Button>
              <Button style={{margin: 'auto 0.5rem'}} onClick={() => {window.location.href = '/'}}>Go Back</Button>
             </Col>
            </Row>
            { visible ?
            <Modal
            title="Edit country information"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={''}
          >
               <Form {...layout} onFinish={onFinish}>
                <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={'capital'} label="Capital" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={'population'} label="Population" rules={[{ type: 'number', required: true}]}>
                  <InputNumber addonAfter='Millions' />
                </Form.Item>
                <Form.Item name={'area'} label="Area" rules={[{ type: 'number', required: true}]}>
                  <InputNumber addonAfter='KM²' />
                </Form.Item>
                <Form.Item name={'domain'} label="Top Level Domain" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button onClick={() => setVisible(false)} style={{marginLeft: '2%'}}>
                  Cancel
                </Button>
                </Form.Item>
              </Form>
            </Modal>
            : ''
            }
            </>
        </Col>
    </Row>
    </>
)

}