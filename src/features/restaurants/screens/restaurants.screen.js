import React from 'react'; 
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';


import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

const SafeArea = styled.SafeAreaView`
    flex: 1; 
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`

const Info = styled.View`

`

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar 
                placeholder='Search'  
            />
        </SearchContainer>
        <ListContainer>
            <Info>
                <RestaurantInfoCard />
            </Info>
        </ListContainer>
    </SafeArea>
)

