import React, { useState, useEffect, createContext } from 'react'; 

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext(); 

export const LocationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const [location, setLocation] = useState([])
    const [keyword, setKeyword] = useState("toronto");

    const onSearch = (searchKeyword) => {
        setIsLoading(true); 
        setKeyword(searchKeyword); 
        
        if (!searchKeyword.length) {
            //don't do anything
            return; 
        }

        locationRequest(searchKeyword.toLowerCase()).then((result) => {
            setIsLoading(false); 
            locationTransform(result); 
            console.log(result); 
        }).catch((err) => {
            setIsLoading(false); 
            setError(err); 
        })
    }


    return(
        <LocationContext.Provider
            value={{
                isLoading, 
                error, 
                location, 
                search: onSearch, 
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )

}