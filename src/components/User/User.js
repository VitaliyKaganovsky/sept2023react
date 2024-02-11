import css from "./User.module.css"

const User = ({user, getterUserDetails}) => {
    let {id, name, username} = user;

    return (
        <div className={css.Box}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={() => getterUserDetails(user)}>Details</button>
        </div>
    );
};

export {User};