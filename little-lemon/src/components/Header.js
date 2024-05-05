import Nav from "./Nav";
import logo from './Logo.svg';

const Header = () => {
    return (
        <header style={{display:'inline'}}>
            <img src={logo}></img>
            <Nav/>
        </header>
    )
}

export default Header;