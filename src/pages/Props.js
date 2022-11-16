import { useState } from 'react';

const Props = () => {
    /*
        Un props est une propriété que l'on passe à un composant (enfant)
        C'est une information qui vient de l'exterieur, du composant, généralement, de son parent

        Les composants sont comme les fonctions Javascript
        Ils acceptent des entrées quelconques (appelées "props")
        et renvoient des éléments réact décrivant ce qui doit apparaitre à l'écran
    */

    const prod = "Ecran";
    const products = ['Ordinateur', 'Souris', 'Clavier'];
    const obj_products = [
        {id : 1, name:'Pomme', price: 2},
        {id : 2, name:'Mouchoirs', price: 1},
        {id : 3, name:'T-Shirt', price: 20}
    ]
    const [isLoading, setLoading] = useState(false);

    const testBtn = () => {
        setLoading(true);
        console.log("coucou");
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }

    //JSX

    return (
        <>
            <h1>Les Props</h1>
            <main>
                <article>
                    <h2>Fonctionnement</h2>
                    <h3>Simple :</h3>
                    <div className='grid'>
                        
                    </div>
                </article>
            </main>
        </>
    )

}

export default Props;