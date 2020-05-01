import React from 'react';
import classnames from "classnames";
import style from "../AlbumList.module.scss";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const AlbumCard = ({coverList, albums, albumItem, photoAmount, history}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={coverList[albumItem.id]} className="card-img-top" alt="coverImage" />
            <div className={classnames("card-body", style.cardBody)}>
                <h5 className="card-title">{albumItem.title}</h5>
                <p>Количество фотографий: {photoAmount[albumItem.id]}</p>
                <Link className="btn btn-primary" to={`${history.location.pathname}/album/${albumItem.id}`}>Перейти</Link>
            </div>
        </div>
    );
};

export default withRouter(AlbumCard);