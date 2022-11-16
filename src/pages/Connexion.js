import { useState } from "react";
import { Btn } from "../components/Buttons";

const Connexion = () => {
    const[isLogged, updateLog] = useState(false);
    function login(){
        /*
        if(isLogged){
            updateLog(false)
        }else {
            updateLog(true)
        }
        OU
        */
        updateLog(!isLogged);

    }
    return (
        <>
            <h1>Login avec création de bouton</h1>
            <button onClick={login}>
                {(isLogged)? 'Deconnexion' : 'Connexion'}
            </button>
            <h1>Login avec appelle du composant Btn</h1>
            <Btn action={login} txt={(isLogged)? 'Deconnexion' : 'Connexion'} />

            {
                (isLogged)?
                <p>Bienvenu.e</p>:
                <p>Vous n'êtes pas connecté.e</p>
            }
        </>
    )


}

export default Connexion;