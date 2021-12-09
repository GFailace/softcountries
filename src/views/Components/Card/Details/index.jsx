import {Card} from 'antd'

export const CardDetails = ({area, capital, flag, map, name, population}) => {

    return (
        <Card style={{textAlign: 'center'}}>
            <h2>{name}</h2>
            <span role='img' aria-label={name} style={{fontSize: '8rem'}}>{flag}</span>
            <p>Capital - {capital}</p>
            <p>Area - {area}km²</p>
            <p>Population - {population}M</p>
            <iframe 
            title={name}
            src={map}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            />
        </Card>
    )
}