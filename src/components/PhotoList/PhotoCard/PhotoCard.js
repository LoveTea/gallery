import React from 'react';

const PhotoCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img onClick={()=>props.openModal(props.index)} className="card-img-top" src={props.photo.url} alt="avatar" />
        </div>
    );
};

export default PhotoCard;