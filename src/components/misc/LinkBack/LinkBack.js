import React from 'react';
import style from "./LinkBack.module.scss";
import {withRouter} from "react-router-dom";

const LinkBack = (props) => {
    return (
        <div className={style.linkBackWrapper}>
            <button onClick={() => props.history.goBack()}>Вернуться</button>
        </div>
    );
};

export default withRouter(LinkBack);