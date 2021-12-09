import { Card } from 'antd'

export const CardCountry = ({capital, flag, name}) => {

    return (
        <>
        <Card title={name} style={{textAlign: 'center'}}>
            <span role='img' aria-label={name} style={{fontSize: '5rem'}}>{flag}</span>
            <p>Capital - {capital}</p>
        </Card>

        </>
    )
}