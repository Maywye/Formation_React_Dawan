import { useState, useEffect } from 'react';
import axios from "axios";

const Request = () =>{
    const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";

    const[joke, setJoke] = useState("");
    const[character, setCharacter] = useState({});
    const swapi_people = "https://swapi.dev/api/people/";
    const [id, setId] = useState(1);

    const getJoke = async () => {
        const {data} = await axios.get(joke_api);
        //joke est un propriété (attribut) de l'objet response JSON
        setJoke(data.joke);
    }

    useEffect(() => {
        console.log("Coucou de useEffect");
        getJoke();
    }, []) // [] : aucune valeur à surveiller, ne s'execute qu'une seule fois, au rendu

    return (
        <>
        <h1>Les requêtes</h1>
        <main>
            <article>
                <h2>Présentation</h2>
                <p>Pour faire l'interaction avec la partie Back End (API -Webservices), on va utiliser une dépendance qui s'appelle "axios"</p>
                <p>C'est une librairie utilisée permettant d'envoyer des requêtes <code>POST</code> <code>GET</code> <code>PUT</code> <code>PATCH</code> <code>DELETE</code></p>
                <p>Installation de la librairie axios :</p>
                <p><code>npm install axios</code></p>
            </article>
            <article>
                <h2>Exemples :</h2>
                <div className='card'>{joke}</div>
                <p>Pour récupérer 1 fois des données dans une API, au moment du chargement du composant, on passe notre requête dans useEffect, et en second paramètre de useEffect, on passe un tableau vide []</p>
                <p> Ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller, il ne s'excutera qu'une seule fois, au chargement</p>
            </article>
        </main>
        </>
    )

}
export default Request;