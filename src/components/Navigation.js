import { NavLink } from "react-router-dom"
import '../styles/Navigation.css'
import { Basket } from './../store/Basket';
import { useSelector } from 'react-redux';

const Navigation = () => {
    //permet de recuperer une valeur dans le store
    const basket = useSelector(state => state.Basket.value);
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Présentation</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/routing">Routage</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/static">Static</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/hooks">Hooks</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/props">Props</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/effects">Effects</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/request">Request</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/forms">Forms</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/404">Not Found</NavLink></li>
                <li><div className="deco"></div></li>
                <li><NavLink to="/redux">Redux</NavLink></li>
                <li><div className="deco"></div></li>
                <li>Panier : {basket} </li>
            </ul>
        </nav>
    )
}

export default Navigation;