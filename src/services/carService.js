import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const carService ={
    getAll:()=> apiService.get(urls.cars),
    deleteCar:(carId)=>apiService.delete(`${urls.cars}/${carId}`),
    addCar:(car)=>apiService.post(urls.cars, car)
}

export {
    carService
}