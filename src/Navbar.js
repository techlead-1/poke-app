import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1 className="logo">Poke App</h1>
            <div className="navlinks">
                <Link to="/" className="navlink">Home</Link>
                <Link to="/about" className="navlink">About</Link>
                <Link to="/pokemons" className="navlink">Pokemons</Link>
            </div>
        </div>
     );
}
 
export default Navbar;