import React from 'react'; 
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';


import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

const SafeArea = styled.SafeAreaView`
    flex: 1; 
    margin-top: ${StatusBar.currentHeight}px;
`

const SearchContainer = styled.View`
    padding: 16px;
`

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
`

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar 
                placeholder='Search'  
            />
        </SearchContainer>
        <ListContainer>
          <RestaurantInfoCard />
        </ListContainer>
    </SafeArea>
)

