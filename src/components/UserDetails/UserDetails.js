const UserDetails = ({detailed}) => {
    const {id,name,username} = detailed
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
        </div>
    );
};

export {UserDetails};