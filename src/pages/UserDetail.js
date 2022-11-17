import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const UserDetail = () => {
    /*
        Le hook useParams() permet de récupérer les paramètres de la route
        Permet d'acceder aux paramètre de l'URL courante
        Le hook, useParam() retourne un objet avec une clé (ex:id) et sa valeur (ex:3)
        Dans notre exemple on souhaite afficher le profile du user
        http://localhost:4000/3 :
            -On va récuperer la route (url)
            -On récupère la clé
    */

    const params = useParams(); //recupère un objet avec les paramètres
    const id = params.id; //on récupère la clé
    const[user, setUser] = useState({});

    //On va utiliser la clé pour récuperer un user
    const getUser = async () => {
        const {data} = await axios.get('http://localhost:4000/users/' + id);
        setUser(data);
    }
    useEffect(() => {
        getUser()
    }, [])

    //JSX
    return (
        <>
            {
                (user) ?
                <div>
                    <h1>Profil de {user.name}</h1>
                    <p>Email : {user.email}</p>
                </div>
                :
                <p>Nope, rien à voir ici !!!</p>
            }
        </>
    )
}

export default UserDetail;