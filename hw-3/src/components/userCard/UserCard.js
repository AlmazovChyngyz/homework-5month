import React from 'react';
import classes from "./User.module.css";

function UserCard ({cardInfo}) {
    return (
        <div className={classes.mainCard} >
            <img className={classes.cardImg} src={cardInfo.avatar} alt= "avatar" />
            <p>Name: {cardInfo.first_name} {cardInfo.last_name}</p>
            <p>Email: {cardInfo.email}</p>
        </div>
    );
}

export default UserCard