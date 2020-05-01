import React from 'react';
import {Link} from "react-router-dom";
import style from "./UserCard.module.scss";
import classnames from "classnames";

const UserCard = ({person}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className={style.cardBody}>
                <h5 className={classnames("card-title", "text-center")}>{person.name}</h5>
                <Link to={`/user/${person.id}`} className="btn btn-primary">Перейти</Link>
            </div>
        </div>
    );
};

export default UserCard;