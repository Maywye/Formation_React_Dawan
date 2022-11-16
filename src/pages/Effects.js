import { useEffect, useState } from 'react';

const Effects = () => {

    /*  
        Le hook d'effet permet l'execution d'effets de bord dans les fonctions composants:
            - Charger des données depuis une serveur distant
            - S'abonner
            - Déclencher une alerte à chaque fois que votre panier est mis à jour
            - Sauvegarder ce panier à chaque mise à jour
            - Modifier manuellement le DOM
        Ce sont des actions qui ne font pas partie du return, qui interviennent apres que React ait mis à jour le DOM.
    */

    const[counter, setCounter] = useState(0);
    const[isLogged, setLog] = useState(false);
    let toto = "toto";

    const increment = () => {
        setCounter(counter+1);
        toto = "Not toto";
        console.warn("in increment : ", toto);
    }

    //1
    //L'effet ici met à jour le compteur qui s'incremente
    //Agit à chaque modification
    useEffect(() => {
        console.log("(First) Counter a été incrementé, new value : ", counter);
    })


    //2
    //useEffect ne se lancera que lorsque ce sont ces valeurs qui sont modifiées
    //On peut passer un deuxième paramètre  à la fonction useEffect
    //un tableau contenant les données à surveiller
    useEffect(() => {
        console.warn("(second) Counter a été incrémenté : ", counter);
    }, [counter])

    //3
    useEffect(() => {
        let seconds =0;
        console.log("Component à été rendu depuis : ");
        let intervale = setInterval(() => {
            seconds++;
            console.log(`${seconds} seconds`);
        }, 1000)
        return () => {
            //couper tous les flux
            clearInterval(intervale);
        }
    })

    return (
        <>
            <h1>Effect</h1>
            <main>
                <article>
                    <h2>Présentation : useEffect</h2>
                    <p>Compteur : {counter}</p>
                    <p>
                        <button onClick={increment}>++</button>
                        <button onClick={() => setLog(!isLogged)}>
                            {(isLogged)? 'Logout' : 'Login'}
                        </button>
                    </p>
                    <p>useEffect permet d'agir lorsque le DOM est mis à jour / rendu</p>
                    <p>Il agit à la création du composant, au 1er rendu, et chacunes des modifications</p>
                    <p>On se sert de useEffect pour : </p>
                    <ul>
                        <li>Faire des requêtes à la création du composant</li>
                        <li>Agir à la modification d'une valeur précise</li>
                        <li>Agir à chaque modification</li>
                        <li>Pour couper les connexions à des flux, des websockets, des observables,...</li>
                    </ul>
                </article>
            </main>
        </>
    )
}
export default Effects;