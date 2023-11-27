import React, { useContext } from 'react'; 
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


import { RestaurantInfoCard } from '../components/restaurants-info-card.components';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import  {Search}  from '../components/search.component'; 

const FlatListContainer = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16
    }
})``;

const LoadingContainer = styled.View`
    position: absolute; 
    top: 50%;
    left: 50%; 
`; 
  
const Loading = styled(ActivityIndicator)`
    margin-left: -25px; 
`; 

export const RestaurantsScreen = () => {

    const { restaurants, isLoading, error } = useContext(RestaurantContext); 

    return(
    <SafeArea>
        {
            (isLoading) && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={MD2Colors.blue300} />
                </LoadingContainer>

            )
        }

        <Search />

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

