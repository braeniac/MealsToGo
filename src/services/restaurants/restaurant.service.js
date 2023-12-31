import { mocks, mockImages } from "./mock";
import camelize  from 'camelize'; 

export const restaurantRequest = (location="43.653225,-79.383186") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Not Found.")
        } 
        resolve(mock); 
    })
}

export const restaurantsTransform = ({ results = [ ] }) => {
    const mappedResults = results.map((restaurant) => {

        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
       
        return {
            ...restaurant, 
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, 
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY' 
        }
    })
    return camelize(mappedResults); 
}

restaurantRequest()
.then(restaurantsTransform)
.then((restaurantResponse) => {

    //print camelized results (restaurants at given location)
    //console.log(restaurantResponse); 
}).catch((err) => {
    console.log(err); 
})