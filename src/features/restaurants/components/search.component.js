import React, { useContext } from 'react'; 
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

import {LocationContext} from '../../../services/location/locaiton.context';


const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`; 

export const Search = () => {

    const locationContext = useContext(LocationContext)

    console.log(locationContext); 

    return (
        <SearchContainer>
            <Searchbar 
                placeholder='Search'  
            />
        </SearchContainer>
    )
}
    
