import { Input } from 'antd'

export const SearchInput = ({input: searchTerm, onChange: setSearchTerm}) => {

    return (
        <>
            <Input type="search" placeholder="Buscar país..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        </>
    )
}