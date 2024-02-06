import {Character} from "./Character";

const Characters = () => {
    const simpsonsFamily = [
        {
            name: "Гомер",
            age: 40,
            relation: "отец"
        },
        {
            name: "Мардж",
            age: 38,
            relation: "мать"
        },
        {
            name: "Барт",
            age: 10,
            relation: "сын"
        },
        {
            name: "Лиза",
            age: 8,
            relation: "дочь"
        },
        {
            name: "Мэгги",
            age: 1,
            relation: "дочь"
        }
    ];
    return (
        <div>
            {simpsonsFamily.map((characterik, index) => <Character key={index} simp={characterik}/>)}
        </div>
    );
};

export {Characters};