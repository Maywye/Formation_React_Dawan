import PropTypes from 'prop-types';
//FOnction prend un seul argument props (signifie propriété) contenant les données
//C'est similaire au passage d'arguments dans nos fonctions

export const Product = (props) => {
    console.log(props);
    const name = props.name; //on récupère
    return (
        <div className="card">
            <h3>{name}</h3> {/* On l'affiche */}
        </div>
    )
}

//Fonction prend en paramètre un objet qui sont les propriétés de l'objet
export const ProductObj = ({name, price, currency = "€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price} {currency}</p>
            <p>Prix (TTC) : {price * 1.2} {currency}</p>
        </div>
    )
}

export const ProductTyped = ({name, price, action, currency = "€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>   
            <p>
                {action && <button onClick={action}>Clic</button>}
            </p>
        </div>
    )
}

// avec la librairie prop-types: rendre des données obligatoires et typées

ProductTyped.propTypes = {
    name : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    action: PropTypes.func
}