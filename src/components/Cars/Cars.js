import {Car} from "../Car/Car";

const Cars = ({cars, deleter}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} deleter={deleter}/>)}
        </div>
    );
};

export {Cars};