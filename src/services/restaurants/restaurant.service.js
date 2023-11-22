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

const restaurantsTransform = (result) => {
    const newResult = camelize(result); 
    return newResult; 
}

RestaurantRequest()
.then(restaurantsTransform)
.then((restaurantResponse) => {

    //print camelized results (restaurants at given location)
    console.log(restaurantResponse); 
}).catch((err) => {
    console.log(err); 
})