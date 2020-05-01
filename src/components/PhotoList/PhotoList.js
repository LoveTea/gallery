import React, {useState, useEffect} from "react";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import PhotoCard from "./PhotoCard/PhotoCard";
import CardWrapper from "../misc/CardWrapper/CardWrapper";
import style from "./PhotoList.module.scss";
import LinkBack from "../misc/LinkBack/LinkBack";
import Title from "../misc/Title/Title";


export default props => {

    const [photos, setPhotos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const {albumId} = props.match.params;

    useEffect(() => {
        function GetPhotos() {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(data => data.json())
                .then(photos => {
                    setPhotos(photos)
                    setLoading(false);
                });
        }

        GetPhotos();
    }, [albumId]);


    function openModal(photo) {
        setIsOpen(true);
        setCurrentPhoto(photo)
    }

    function close() {
        setIsOpen(false);
    }

  return (
      isLoading
          ? <Loading />
          : <>
              <Title title="Фотографии" />
              <div className={style.photoList}>
          {
              photos.map((photo, index) => (
                <CardWrapper key={index} style={{padding: 20}}>
                    <PhotoCard
                        photo={photo}
                        index={index}
                        openModal={openModal}
                    />
                </CardWrapper>
            ))
          }
          {
              isOpen ? <Modal close={close} photos={photos} currentPhoto={currentPhoto} /> : null
          }
      </div>
              <LinkBack/>
          </>
  )
};