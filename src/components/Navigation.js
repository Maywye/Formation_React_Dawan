import { NavLink } from "react-router-dom"
import '../styles/Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Présentation</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/routing">Routage</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/static">Static</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/hooks">Hooks</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/props">Props</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/effects">Effects</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
                <li>
                    <NavLink to="/request">Request</NavLink>
                </li>
                <li>
                    <div className="deco"></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;