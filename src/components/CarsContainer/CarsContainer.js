import {carService} from "../../services/carService";
import {useEffect, useState} from "react";
import {Cars} from "../Cars/Cars";
import {CarForm} from "../CarForm/CarForm";

const CarsContainer = () => {



    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data})=> setCars(data))
    }, [trigger]);


    const deleter = async (carId) => {
        await carService.deleteCar(carId)
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <CarForm cars={cars} setTrigger={setTrigger}/>
            <br/>
            <Cars cars={cars} deleter={deleter}/>
        </div>
    );
};

export {CarsContainer};