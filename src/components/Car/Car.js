import css from './Car.module.css';
const Car = ({car, deleter}) => {
    const {id, brand, price, year} = car
    return (
        <div className={css.Box}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>deleter(car.id)}>delete bleat</button>
            <button>update</button>
        </div>
    );
};

export {Car};