import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    const detailsGetter = (user) => {
        setUserDetails(user)
    }

    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} func={detailsGetter}/>)}
            <br/>
            {userDetails&&<UserDetails detailed={userDetails}/>}
        </div>
    );
};

export {Users};