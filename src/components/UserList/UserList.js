import React, {useState, useEffect} from 'react';
import style from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import CardWrapper from "../misc/CardWrapper/CardWrapper";
import Loading from "../Loading/Loading";
import Title from "../misc/Title/Title";

export default () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        function GetUsers() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(data => data.json())
                .then(users => {
                    setUsers(users);
                    setLoading(false);
                })
        }
        
        GetUsers();
    }, []);



    return (
        isLoading
        ? <Loading/>
        : <>
            <Title title="Пользователи" />
                <div className={style.user}>
                    {users.map((person, index) => (
                        <CardWrapper key={index} style={{padding: "20px"}}>
                            <UserCard
                                person={person}
                            />
                        </CardWrapper>

                    ))}
                </div>
            </>
    )
}