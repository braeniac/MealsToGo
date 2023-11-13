import React from 'react'; 
import { StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';


import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

const SafeArea = styled.SafeAreaView`
    flex: 1; 
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`; 

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`; 

const FlatListContainer = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16
    }
})``;
  



export const RestaurantsScreen = () => ( 
    <SafeArea>
        <SearchContainer>
            <Searchbar 
                placeholder='Search'  
            />
        </SearchContainer>

        <FlatListContainer 
            data={[{name: 1}, {name:2}, {name:3}, {name:4}]}
            renderItem={() => <RestaurantInfoCard /> }
            keyExtractor={(item) => item.name}    
        />
        
    </SafeArea>
)

