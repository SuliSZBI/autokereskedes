import { Link } from 'react-router-dom';

const Navbar = () => {
    let valtozo = 0;

    const felfed = () => {
        let navbarReisztracioLink = document.querySelector(
            '.navbar-regisztracio-link'
        );
        let navbarLoginLink = document.querySelector('.navbar-login-link');

        if (valtozo % 2 === 1) {
            navbarReisztracioLink.classList.add('inline-none-stilus');
            navbarReisztracioLink.classList.remove('inline-blokk-stilus');
            navbarLoginLink.classList.add('inline-none-stilus');
            navbarLoginLink.classList.remove('inline-blokk-stilus');
        } else {
            navbarReisztracioLink.classList.add('inline-blokk-stilus');
            navbarReisztracioLink.classList.remove('inline-none-stilus');
            navbarLoginLink.classList.add('inline-blokk-stilus');
            navbarLoginLink.classList.remove('inline-none-stilus');
        }

        valtozo++;
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">SportCars.</div>
            <div className="navbar-main">
                <Link to="/info">Rólunk</Link>
                <Link
                    to="/home"
                    className="active"
                >
                    Bemutató
                </Link>
                <Link to="/autok">Autók</Link>
            </div>
            <div className="navbar-regisztracio">
                <Link
                    to="/register"
                    className="navbar-regisztracio-link"
                >
                    Regisztráció
                </Link>
                <Link
                    to="/login"
                    className="navbar-login-link"
                >
                    Belépés
                </Link>
                <Link
                    to="#"
                    className="rejtett"
                    onClick={felfed}
                >
                    <i className="fa fa-bars"></i>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
