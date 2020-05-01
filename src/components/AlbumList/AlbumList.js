import React, {useState, useEffect} from "react";
import style from "./AlbumList.module.scss";
import Loading from "../Loading/Loading";
import CardWrapper from "../misc/CardWrapper/CardWrapper";
import AlbumCard from "./AlbumCard/AlbumCard";
import LinkBack from "../misc/LinkBack/LinkBack";
import {withRouter} from "react-router-dom";
import Title from "../misc/Title/Title";

const AlbumList = (props) => {
    const [albums, setAlbums] = useState([]);
    const [coverList, setCoverList] = useState([]);
    const [photoAmount, setPhotoAmount] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {userId} = props.match.params;

    useEffect(() => {
        const GetAlbums = () => {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(data => data.json())
                .then(albums => {
                    setAlbums(albums);
                    setLoading(false);
                })
        };

        const getAlbumInfo = () => {
             fetch(`https://jsonplaceholder.typicode.com/photos`)
                .then(photos => photos.json())
                .then(photos => {
                    let coverList = {},
                        photoAmount = {};

                    photos.forEach(photo => {
                        // Получить первое фото альбома
                        if (!coverList[photo.albumId]) coverList[photo.albumId] = photo.url;
                        // Получить количество фотографий альбома
                        if (!photoAmount[photo.albumId]) photoAmount[photo.albumId] = 1;
                        else photoAmount[photo.albumId]=photoAmount[photo.albumId] + 1
                    });
                    setCoverList(coverList);
                    setPhotoAmount(photoAmount);
                })
        };

        GetAlbums();
        getAlbumInfo();
    }, [userId]);

  return (
      isLoading
          ? <Loading/>
          : <>
              <Title title="Альбомы" />
              <div className={style.cards}>
          {
              albums.map((albumItem, index) => (
                  <CardWrapper key={index} style={{padding: "20px"}}>
                      <AlbumCard
                          coverList={coverList}
                          albumItem={albumItem}
                          albums={albums}
                          photoAmount={photoAmount}
                      />
                  </CardWrapper>
            ))
          }
      </div>
          <LinkBack/>
          </>
  )
};

export default withRouter(AlbumList);