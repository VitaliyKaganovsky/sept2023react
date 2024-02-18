import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, []);

    const userSetter = (user) => {
      setCurrentUser(user)
    }

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} toSet={userSetter}/>)}
            <br/>
            {currentUser&&<UserDetails detailsRozmazano={currentUser}/>}
        </div>
    );
};

export {Users};