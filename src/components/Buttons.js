import { useNavigate } from 'react-router-dom'
import '../styles/Buttons.css'

export const Btn = ({action, txt, loading=false, disabled=false}) => {
    return (
        <button disabled={disabled}onClick={action}>
            {(!loading) ? txt : <span className="bounce" />}
        </button>
    )
}

export const BackBtn = () => {
    /*
        Le hook useNavigate() nous permet de naviguer à travers les routes
        Par exemple, nous permet de se rediriger vers la page précedement visitée
    */
    const navigate = useNavigate();

    const back = () => navigate(-1);

    return (
        <button onClick={back} className="secondary">{'<'} Back</button>
    )
    
}