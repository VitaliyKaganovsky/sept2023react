const UserDetails = ({userDetails}) => {
    let {id, name, username} = userDetails
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
        </div>
    );
};

export {UserDetails};