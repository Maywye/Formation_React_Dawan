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
                    <NavLink to="/routing">Routage</NavLink>
                </li>
                <li>
                    <NavLink to="/static">Static</NavLink>
                </li>
                <li>
                    <NavLink to="/hooks">Hooks</NavLink>
                </li>
                <li>
                    <NavLink to="/props">Props</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;