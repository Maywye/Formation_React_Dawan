import { useSelector, useDispatch } from "react-redux";
import Basket, { add, remove } from './../store/Basket';


const Redux = () => {
    /*
        On va lire les données du Store avec le hook useSelector
        Pour Appeler les action du reducer, nous utiliserons le hook useDispatch();
    */
    
    //Le hook useSelector : permet de récupérer une valeur dans le store
    const count = useSelector((state) => state.Basket.value);

    //Le hook useDispatch appel la fonction Dispatch
    const dispatch = useDispatch();

    const addBasket = () => dispatch(add());
    function rmvBasket(){
        dispatch(remove());
    }


    return(
        <>
        <h1>React - Redux </h1>
        <main>
            <article>
                <h2>Initiation</h2>
                <p><a href="https://openclassrooms.com/fr/courses/7150626-utilisez-le-state-manager-redux-pour-gerer-l-etat-de-vos-applications/7286787-initiez-vous-aux-concepts-cles-de-redux-sur-une-application-simple"><b>Open Class Room {" >"}</b></a></p>
                <p><a href="https://dev.to/ericlecodeur/react-redux-guide-du-debutant-12ck"><b>Guide du débutant {" >"}</b></a></p>
                <p>Pour faire fonctionner Redux avec React nous avont besoin d’une librairie qui s’appelle React-React :</p>
                <p><code>npm install @reduxjs/toolkit react-redux</code></p>
                <p>React-Redux apport des outils adaptés pour interagir avec Redux depuis React</p>
                <ul>
                    <li>Créer le composant (page) Redux .js</li>
                    <li> Dans App.js créer la route /redux et le lien dans Navigation.js</li>
                    <li>Créer un dossier Store dans src:</li>
                    <p>Dans le dossier store :</p>
                    <li>Créer le Basket.js (reducer)</li>
                    <li>Créer le composant Store.js</li>
                </ul>
            
            </article>
            <article>
                <h2>Exemple</h2>
                <p>Il y a {count} élement(s) dans votre panier</p>
                <div>
                    <button onClick={addBasket}>+ Ajouter au panier</button>
                    <button onClick={rmvBasket}>- Supprimer du panier</button>
                </div>
            </article>
        </main>
        </>
    )
}
export default Redux;