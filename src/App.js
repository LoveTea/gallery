import React from 'react';
import { Route } from 'react-router-dom';
import UserList from "./components/UserList/UserList";
import AlbumList from "./components/AlbumList/AlbumList";
import PhotoList from "./components/PhotoList/PhotoList";


function App() {
    return (
        <div className="container">
            <Route path="/" exact component={ UserList } />
            <Route path="/user/:userId" exact component={ AlbumList } />
            <Route path="/user/:userId/album/:albumId" exact component={ PhotoList } />
        </div>
    )
}

export default App;
