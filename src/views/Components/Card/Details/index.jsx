import {Card} from 'antd'

export const CardDetails = ({area, capital, domain, flag, name, population}) => {

    return (
        <Card style={{textAlign: 'center'}}>
            <h2>{name}</h2>
            <span role='img' aria-label={name} style={{fontSize: '8rem'}}>{flag}</span>
            <p>Capital - {capital}</p>
            <p>Area - {area}km²</p>
            <p>Population - {population}M</p>
            <p>Top Level Domain - {domain}</p>            
        </Card>
    )
}