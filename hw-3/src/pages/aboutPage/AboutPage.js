import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers} from "../../redux/action";
import UserCard from "../../components/userCard/UserCard";
import classes from "./AboutPage.module.css";
function AboutPage () {
    const users = useSelector((state) => state.titleReducer.users);
    // const error = useSelector((state) => state.titleReducer.error);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div className={classes.aboutPage} >
            {users[0] && users[0].map(item => <UserCard cardInfo={item}/>)}
        </div>
    );
}

export default AboutPage