import React from 'react';
import style from "./CardWrapper.module.scss";

const CardWrapper = (props) => {
    return (
        <div className={style.cardWrapper} style={{...props.style}}>
            {props.children}
        </div>
    );
};

export default CardWrapper;