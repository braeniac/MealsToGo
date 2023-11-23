import React, { useContext } from 'react'; 
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

import { RestaurantInfoCard } from '../components/restaurants-info-card.components';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';


const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`; 

const FlatListContainer = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16
    }
})``;
  

export const RestaurantsScreen = () => {

    const { restaurants, isLoading, error } = useContext(RestaurantContext); 

    return(
    <SafeArea>
        <SearchContainer>
            <Searchbar 
                placeholder='Search'  
            />
        </SearchContainer>

        <FlatListContainer 
            data={restaurants}
            renderItem={({ item }) => 
                <RestaurantInfoCard restaurant={item} /> 
            }
            keyExtractor={(item) => item.name}    
        />
        
    </SafeArea>
    );
}

