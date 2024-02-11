import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";
import css from "./Users.module.css"



const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, []);
    const [userDetails, setUserDetails] = useState(null)

    const getterUserDetails = (user) => {
      setUserDetails(user)
    }

    return (
        <div>
            <div className={css.Mainbox}>{users.map(user=><User key={user.id} user={user} getterUserDetails={getterUserDetails}/>)}</div>
            <div className={css.DetailsBox}>{userDetails&& <UserDetails userDetails={userDetails}/>}</div>
        </div>
    );
};

export {Users};