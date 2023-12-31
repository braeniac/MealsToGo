import React, { useState, useEffect, useMemo, createContext } from 'react';

import { restaurantRequest, restaurantsTransform } from './restaurant.service';

export const RestaurantContext = createContext(); 

export const RestaurantContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const retrieveRestaurants = () => {
        setIsLoading(true); 
        setTimeout(() => {
            restaurantRequest()
            .then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false); 
                setRestaurants(results)
            }).catch((err) => {
                setIsLoading(false); 
                setError(err); 
            }); 
        }, 2000)
    }

    useEffect(() => {
        //retrieve restaurants 
        retrieveRestaurants(); 
    }, [])

    return (
        <RestaurantContext.Provider
            value={{    
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}