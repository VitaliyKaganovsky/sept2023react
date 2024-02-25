import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {useState} from "react";

const CarForm = ({setTrigger}) => {


    let {register,
        handleSubmit,
        reset} = useForm();


    const carCreate = (item) => {
        carService.addCar(item)
        console.log(item);
        setTrigger(prev => !prev)
    }

    return (
        <form onSubmit={handleSubmit(carCreate)}>
            <input type="brand" placeholder={`brand`} {...register(`brand`)}/>
            <input type="price" placeholder={`price`} {...register(`price`)}/>
            <input type="year" placeholder={`year`} {...register(`year`)}/>
            <button>ADD CAR</button>
        </form>


    );
};

export {CarForm};