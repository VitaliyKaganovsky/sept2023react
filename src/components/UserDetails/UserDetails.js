const UserDetails = ({detailsRozmazano}) => {
    let {id,name,username} = detailsRozmazano
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
        </div>
    );
};

export {UserDetails};