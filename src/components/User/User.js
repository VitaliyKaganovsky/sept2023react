const User = ({user,func}) => {
    const {id,name,username} = user
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=>func(user)}>DETAIL</button>
        </div>
    );
};

export {User};