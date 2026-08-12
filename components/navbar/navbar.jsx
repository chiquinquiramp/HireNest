import Logo from  "./Logo";
import NavLinks from "./Navlinks";
import AuthButtons from "./AuthButtons";

function Navbar() {
    return (
        <nav>
        <Logo />
        <NavLinks />
        <AuthButtons />
        </nav>
    );
}

export default Navbar; 