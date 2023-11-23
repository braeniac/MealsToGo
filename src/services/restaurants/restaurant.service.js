import { mocks } from "./mock";
import camelize  from 'camelize'; 
export const RestaurantRequest = (location="43.653225,-79.383186") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Not Found.")
        } 
        resolve(mock); 
    })
}

const restaurantsTransform = ({ results = [ ] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant, 
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, 
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY' 
        }
    })
    return camelize(mappedResults); 
}

RestaurantRequest()
.then(restaurantsTransform)
.then((restaurantResponse) => {

    //print camelized results (restaurants at given location)
    //console.log(restaurantResponse); 
}).catch((err) => {
    console.log(err); 
})