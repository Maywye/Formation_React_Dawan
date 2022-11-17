import { NavLink } from "react-router-dom"
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="copyright">
                    <h5>@ Copyright - <a href="https://www.dawan.fr/">Dawan</a> - Tous droit réservé - 2022</h5>
                </div>
            </div>
        </footer>
    )
}
export default Footer;