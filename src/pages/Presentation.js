const Presentation = () => {
    const message = "Je suis une variable ! ";
    const borderColor = " darklategrey";
    const my_style = {color: "steal", bordeStyle: "solid", borderColor};

    /*
        Les noms de propriétés en 2 mot ou plus utilisent le kebab-case en CSS
        Le kebab-case n'étant pas valable en JS, on utilise du CamelCase pour les propriétés
        (Comme en JS classique)
        Les objets fonctionnent comme en JS classique, avec les mêmes règles
        le même sucre syntaxique (decomposition, objets litteraux, classe...)
    */

    const logo = "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png";

    const image = {
        url: "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png",
        alt: "Logo de react",
        height: 40
    }

    //Ici: le JSX à retourner
    return (
        <div>
            <h1>Présentation</h1>
            <main>
                <article>
                    <h2>Mise en place</h2>
                    <p><b>Node :</b> Outil qui permet de lancer du Javascript en dehors du navigateur, via une machine virtuelle V8 (moteur JS de Chrome)</p>
                    <p><b>NPM :</b> Node Package Manager : permet de gérer une application node en ligne de commande de lancer des scripts, et de gérer des librairies</p>
                    <p><b>NPX : </b> Node package Executer : pour executer des librairies</p>
                    <h4>Pour créer une application Réact :</h4>
                    <p className="warning">Besoin de NodeJS avec version {">"} 14</p>
                    <ul>
                        <li>Ouvrir PowerShell, ou invite de commande dans le dossier </li>
                        <li>Taper : <code>npx create-react-app mon-app</code> </li>
                        <li><code>cd mon-app</code></li>
                        <li><code>npm start</code></li>
                    </ul>
                </article>
                <article>
                    <h2>Les JSX</h2>
                    <p>Un composant: C'est un block de code réutilisable</p>
                    <p>Il est conseillé en React d'utiliser la syntaxe JSX.</p>
                    <p>Les JSX ne sont ni une chaine de charactère, ni du HTML</p>
                    <p>React va se servir de cette architecture pour recréer le DOM</p>
                    <p>Les JSX permettent d'interpole du code JS à l'intérieur des balises</p>
                    <p>pour ça, on utilise les accolades</p>
                    <div>
                        <ul>
                            <li>Opération {2 + 2}</li>
                            <li>Commentaire {/*Coucou!*/}</li>
                            <li>Variable : {message}</li>
                            <li>String : {"coucou"}</li>
                            <li>Template ES6: {`Message : ${message}`}</li>
                            <li>Ecrire de xaractère réservée : {"< >"}</li>
                            <li>Exemple de code {"<h1>Hello World</h1>"}</li>
                            <li>Accolade: {'{dans du JS}'}</li>
                        </ul>
                    </div>
                </article>
                <article>
                    <h2>Les attributs</h2>
                    <p>En HTML, on a des attrubuts: class, les id, for, ....</p>
                    <p>Certains de ces noms d'attributs sont des mots réservés en JS:</p>
                    <ul>
                        <li>class: className</li>
                        <li>for: htmlFor</li>
                        <li>tabindex: tabIndex</li>
                    </ul>
                    <p>Les attributs HTML peuvent prendre en valeur une String "", comme dans du HTML classique ou une expression JS entre accolades</p>
                    <li>Classe : <span id='span' className="monSpan">Plop</span></li>
                    <li>Style: <span style={{color:- "red"}}>Styled</span></li>
                    <li>Style par variable: <span style={my_style}>Color part variable</span></li>
                    <li>Image : <img src={logo} height="50" alt=""/></li>
                    <li>Image Objet: 
                        <img src="{image.url}" alt={image.alt} height={image.height}/>
                    </li>
                </article>
            </main>
        </div>
    )

}

export default Presentation;