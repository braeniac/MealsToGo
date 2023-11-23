import React, { useState, useEffect, createContext } from 'react'; 

import { locationRequest, locationTransform } from './location.service';

export const locationContext = createContext(); 

export const locationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const [location, setLocation] = useState([])
    const [keyword, setKeyword] = useState("toronto");

    const onSearch = (searchKeyword) => {
        setIsLoading(true); 
        setKeyword(searchKeyword); 
        locationRequest(searchKeyword.toLowerCase()).then((result) => {
            setIsLoading(false); 
            locationTransform(result)
        }).catch((err) => {
            setIsLoading(false); 
            setError(err); 
        })
    }

    useEffect(() => {
        onSearch(keyword)
    }, [keyword])

    return(
        <locationContext.Provider
            value={{
                isLoading, 
                error, 
                location, 
                search: onSearch, 
                keyword
            }}
        >
            {children}
        </locationContext.Provider>
    )

}