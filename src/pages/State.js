import { useState } from "react";

const Hooks = () => {

    let counter1 = 0;
    const boom = () => alert("BOOM !");
    const event = (event) => console.log(event);

    const param = (p) => console.log(p);
    const incrementCount = () => {
        counter1++;
        console.log(counter1);
    }

    /* HOOKS */
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Hello World");

    const increment = () => {
        const new_value = count + 1;
        setCount(new_value);
    }

    const handleSubmit = (e) => {
        //Pour eviter que la page se recharge à cause du submit
        e.preventDefault();
        console.log(e);
        const form = e.target; //tableau
        const input = form[0]; //element HTML input
        console.log(input);
        const new_message = input.value;
        setMessage(new_message); //fonction issue de useState0
        input.value = "";
    }

    // JSX
    return (
        <>
            <h1>Les Hooks d'état</h1>
            <main>
                <article>
                    <h2>Problème</h2>
                    <h3>Evenement de click</h3>
                    <div>
                        <button onClick={boom}>Ne cliquez pas ici</button>
                        <button onClick={event}>Event</button>
                        <button onClick={() => console.log("Hello")}>Hello ?</button>
                        <button onClick={e => console.log(e)}>Event 2</button>
                        <button onClick={() => param("Coucou")}>Paramètre</button>
                    </div>
                    <h3>Compteur</h3>
                    <p>Mon compteur : {counter1}</p>
                    <div>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <p>La modification se fait bien avec counter, mais elle n'est pas répercutée sur le DOM</p>
                    <p>Pour que React modifie le DOM dynamiquement, il faut lui demander d'écouter l'état des variables.</p>
                </article>
                <article>
                    <h2>Le Hook d'état : useState</h2>
                    <p>Les hooks existe depuis React 16.8, avant, on utilisaient les states</p>
                    <p>useState est une méthode qui retourne un tableau de 2 valeurs : l'état actuel qui est la valeur actuelle, et une fonction pour modifier cet état</p>
                    <p>Mon deuxième compteur : <b>{count}</b></p>
                    <div>
                        <button onClick={increment}>Increment</button>
                    </div>

                    <p>Mon message :</p>
                    <p>{message}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="msg">New message :</label>
                        <input id="msg" name="msg" ></input>
                        <button type="submit">Save</button>
                    </form>
                </article>
            </main>
        </>
    )
}
export default Hooks;