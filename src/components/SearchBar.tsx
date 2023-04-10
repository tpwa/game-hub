import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

interface Props {
    onInputChange: (input: string) => void;
}

const SearchBar = ({ onInputChange }: Props) => {
    return (
        <InputGroup size='sm' width='auto'>
            <InputLeftElement
                children={<Search2Icon color="gray.500" />}
            />
            <Input size='sm' placeholder='Search games...' onChange={(e) => onInputChange(e.target.value)} />
        </InputGroup>
    )
}

export default SearchBar