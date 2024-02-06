const Character = ({simp}) => {
    const {name, age, relation} = simp
    return (
        <div>
            <h1>This is {name}</h1>
            <p>My age is {age}</p>
            <p>I`m {relation}</p>
        </div>
    );
};

export {Character};