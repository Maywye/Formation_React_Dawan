import { useState } from "react";
import { Product, ProductObj, ProductTyped } from "../components/Product";

const Props = () => {

    /*
        Un props est une propriété que l'on passe à un composant (enfant)
        C'est une information qui vient de l'extrieur, du composant, généralement, 
        de son parent 

        Les composants sont comme les fonctions Javascript 
        Ils acceptent des entrées quelconques (appelées "props")
        et renvoient des éléments Réact décrivant ce qui doit apparaître à l'écran
    */

        const prod = "Ecran";
        const products = ['Ordinateur', 'Sourie', 'Clavier'];
        const obj_products = [
            {id : 1, name: 'Pomme', price: 2},
            {id : 2, name: 'Mouchoirs', price: 1},
            {id : 3, name: 'T-shirt', price: 20},
        ]

        const [isLoading, setLoading] = useState(false);

        const testBtn = () => {
            setLoading(true);
            console.log("Coucou");
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
                    <h3>Simple: </h3>
                    <div  className="grid">
                        {/* 
                            Quand on appelle le composant Product on lui transmetre des 
                            propriétés 
                            Ici, on donne au composant Product la propriété name avec comme 
                            valeur "Tasse"
                            On peut passer autant de propriété que l'on souhaite à un composant
                            Cela peut-être n'importe quel type de données 
                         */}
                        <Product name="Tasse"/>
                        <Product name={prod} /> 
                        <Product />
                        {products.map(p => <Product key={p} name={p}/>)}
                    </div>

                    <h3>Objets</h3>
                    <div className="grid">
                    {/*
                        On peut transmettre un objet entier en tant que props et acceder 
                        au propriété de l'objet dans le composant enfant
                      */}
                      {obj_products.map(p => <ProductObj key={p.id} name={p.name} 
                      price={p.price}/>)}
                      <ProductObj name="Café" price="2" currency="$" />
                      <ProductObj name="Thé" />
                      <ProductObj name="Beurre de Cacahuète" price="quatre" />
                      <ProductObj name="Beurre d'amande" prix="5" />
                    </div>
                </article>
                <article>
                    <h2>Typage</h2>
                    <p>Les props, et la souplesse de JS sur les types peuvent poser problème :</p>
                    <ul>
                        <li>Propriété non passée</li>
                        <li>Mauvais type</li>
                        <li>Erreur sur le nom d'une prop</li>
                    </ul>
                    <p>Pour pallier à ca, il existe une librairie : prop-types</p>
                    <p><code>npm i prop-types</code></p>
                    <ul>
                        <li>Ne fonctionne qu'avec les attributs calculés {'prop={valeur}'}</li>
                        <li>C'est une librairie de développement, qui ne lance que des warnings</li>
                    </ul>

                    <h3>Produits typés :</h3>
                    <div className="grid">
                        <ProductTyped name={"Machin"}/>
                    </div>
                </article>
            </main>
        </>
    )
}
export default Props;