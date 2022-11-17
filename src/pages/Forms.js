import { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import ShowForm from '../components/ShowForm';


const Forms = () => {
    const[users, setUsers] = useState([]);
    const api_url = ('http://localhost:4000/users');
    
    const getUsers = async () => {
        const {data} = await axios.get(api_url);
        setUsers(data);
        console.log(data);
        // ou 
        /*
        axios.get(api_url)
        .then(res => setUsers(res.data))
        */
    }
    useEffect(() => {
        getUsers();
    }, []);

    // create user 
    const createUser = (user) => {
        axios.post(api_url, user) //on persist notre user
        .then(() => getUsers()) //on relance la requete pour afficher notre nouveau user
        .catch(err => {
            console.error(err);
            alert('Nope !');
        })
    }

    // gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        const form = e.target; //un tableau avec les input /!\ fieldset prend la valeur [0] du tableau.
        const name = form.name.value; //ou form.[1].value 
        const email = form.email.value; //ou form.[2].value
        const user = {name, email}; // ou :{name:name, email:email}
        createUser(user);
        form.name.value = '';
        form.email.value = '';
    }


    return (
        <>
            <h1>Les formulaires</h1>
            <main>
                <article>
                    <h2>JSON SERVER</h2>
                    <p>JSON-SERVER  va nous aider à configurer très rapidement une API REST avec les opérations CRUD</p>
                    <p>Installation de json server</p>
                    <ul>
                        <li><code>npm install -g json-server</code></li>
                        <p>OU</p>
                        <li><code>npm i json-server</code></li>
                    </ul>
                    <p>Pour se connecter ou exécuter l'API REST :</p>
                    <ul>
                        <li><code>json-server chemin/db.json  --port 4000</code></li>
                        <p>Dans notre cas :</p>
                        <li><code>json-server src/assets/db/db.json --port 4000</code></li>
                    </ul>

                    <p>Dans le cas d'une erreur :</p>
                    <ul>
                        <li>Résoudre le problème unauthorizedaccess fullyqualifiederrorid (dans la console powershell) :</li>
                        <ul>
                            <li><code>Get-ExecutionPolicy -List</code></li>
                            <li><code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code></li>
                        </ul>
                        <p>OU</p>
                        <li>Saisir les commandes dans le git bash</li>
                    </ul>
                </article>

                <article>
                    <h2>Exercices</h2>
                    <ul>
                        <li>Créer un composant Forms.js dans pages</li>
                        <li>Dans App.js créer la route /forms et le lien dans Navigation.js</li>
                        <p>Dans le composant Forms.js : </p>
                        <li>Déclarer une variable d’état users</li>
                        <li>Déclarer une variable api_url contenant une requête vers une API</li>
                        <li>Déclarer une méthode getUsers qui nous récupère la liste des Users et met à jour l’état users en appelant la méthode setUsers</li>
                        <li>Dans JSX afficher la liste des Users </li>
                        <li>Créer une méthode createUser pour ajouter un User</li>
                        <li>Dans JSX créer un formulaire pour ajouter le user (name, email, et bouton)</li>
                        <li>Dans le dossier assets créer un dossier db</li>
                        <li>Dans le dossier db créer un fichier db.json avec des données</li>
                        <p>UserDetails : </p>
                        <li>Créer un lien de navigation permettant d’accéder à un user</li>
                        <li>Créer un composant UserParam.js dans le dossier page qui va nous afficher un user</li>
                        <li>Utiliser le Hook <code>useParam()</code>  : Récupère un objet avec les paramètres</li>
                        <li>Dans App.js créer la route <code>path=’/user/ :id’</code></li>
                    </ul>
                </article>
                <article>
                    <h2>Utilisateurs</h2>
                    <div className='grid'>
                        {
                            users.map(u => (
                                <div className='card' key={(u.id)}>
                                    <h3>{u.name}</h3>
                                    <p>
                                        <NavLink to={'/user/' + u.id}> Profil</NavLink>
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                </article>
                <br></br>
                <article>
                    <h2>Formulaire</h2>
                    <ShowForm create={createUser}></ShowForm>

                </article>
            </main>
        </>
    )
}


export default Forms;