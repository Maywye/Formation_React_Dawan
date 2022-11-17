import { useState, useEffect } from 'react';
import axios from "axios";

const Request = () =>{
    const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";

    const[joke, setJoke] = useState("");
    const[character, setCharacter] = useState({});
    const swapi_people = "https://swapi.dev/api/people/";
    const [id, setId] = useState(1);

    //bloquer le bouton 'suivant' a la fin du count

    const [characters, setCharacters] = useState({});

        
    const getJoke = async () => {
        const {data} = await axios.get(joke_api);
        //joke est un propriété (attribut) de l'objet response JSON
        setJoke(data.joke);
    }
    useEffect(() => {
        console.log("Coucou de useEffect");
        getJoke();
    }, []) // [] : aucune valeur à surveiller, ne s'execute qu'une seule fois, au rendu

    
    // --------------- EXO ------------------

        // ----- /!\  ne pas rennomé data !!! /!\
    /*
        1 - Implementer la methode getCharacter()- ==> (utiliser axios)
        url pour récuperer un people : https://swapi.dev/api/people/{id}
        ==> swapi_people + id
    */

    const getCharacter = async () => {
        const {data} = await axios.get(swapi_people + id);
        setCharacter(data);
    }

    /*
        2 - useEffect
        On surveille l'id
        Quand l'id est mise à jour (change) useEffect se lance et appel la methode getCharacter qui charge les données venant de l'API
    */
    useEffect(() => {
        getCharacter();
    }, [id])

    /*
        3 - Bloquer le bouton 'suivant'
    */

    const getCharacters = () => {
        axios.get(swapi_people)
        .then(res => setCharacters(res.data))
    }

    useEffect(() => {
        getCharacters();
    }, []);



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
                <p>Pour récupérer 1 fois des données dans une API, au moment du chargement du composant, on passe notre requête dans useEffect, et en second paramètre de useEffect, on passe un tableau vide [ ]</p>
                <p> Ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller, il ne s'excutera qu'une seule fois, au chargement</p>
            </article>
            <article>
            <h2>Avec filtre dynamique : </h2>
                <p>
                    <button disabled={id <= 1} onClick={() => setId(id - 1)}>Précédent</button>
                    <button disabled={id > characters.count} onClick={() => setId(id + 1)}>Suivant</button>
                </p>

                <div className="card">
                    <h3>Nom : {character.name}</h3>
                    <p>Date de naissance : {character.birth_year}</p>
                    <p>Sexe : {character.gender}</p>
                    <p>Taille : {character.height+ ' cm'}</p>
                    <p>Poids : {character.mass + ' kg'}</p>
                    <p></p>

                </div>
            </article>
        </main>
        </>
    )

}
export default Request;