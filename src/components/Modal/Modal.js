import React, {useState, useEffect} from "react";
import style from "./Modal.module.scss";

export default props => {

    const [currentPhoto, setCurrentPhoto] = useState(0);

    const keydownHandle = (event) => {
        const {keyCode} = event;
        switch (keyCode) {
            case 37:
                prevPhoto();
            break;
            case 39:
                nextPhoto();
                break;
            default:
                return true;
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keydownHandle);

        return () => {
            window.removeEventListener("keydown", keydownHandle);
        }
    });

    useEffect(() => {
        setCurrentPhoto(props.currentPhoto);
    }, [props]);

    function prevPhoto() {
        if (currentPhoto - 1 >= 0) {
            setCurrentPhoto(currentPhoto - 1);
        }
    }

    function nextPhoto() {
        if (currentPhoto + 1 < props.photos.length) {
            setCurrentPhoto(currentPhoto + 1);
        }
    }

  return (
      <div className={style.modal}>
          <div onClick={props.close} className={style.modal__close}>X</div>
          <div className={style.modal__overlay}>
              <button onClick={prevPhoto} type="button" className="btn btn-primary">&lt;</button>
              <img className={style.modal__image} src={props.photos[currentPhoto].url} alt="avatar"/>
              <button onClick={nextPhoto} type="button" className="btn btn-primary">&gt;</button>
          </div>
          <div className={style.modal__numberPage}>
              {currentPhoto + 1} / {props.photos.length}
          </div>
          <div className={style.modal__advice}>
              <p>Используй стрелочки для переключения фотографий</p>
          </div>
      </div>





  )
};