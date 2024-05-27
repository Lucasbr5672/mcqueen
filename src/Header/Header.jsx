import {Link} from 'react-router-dom'
import {Nav} from "./Header"


const Header = () => {
    return(
        <Nav>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='Sobre'>Sobre</Link>
            <span> | </span>
            <Link to='contato'>Contato</Link>
            <span> | </span>
            <Link to='Login'>Login</Link>
        </Nav>
    )
}
export default Header;