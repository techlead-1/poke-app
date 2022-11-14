import { Link } from "react-router-dom";

const Home = () => {

    return ( 
        <div className="home">
            <h1 className="home-title">Poke App</h1>
            <p className="home-description">
                View thousand of pokemon charcters for free using the poke app. All you have to do is click a button and you get access to thousands of charcters within seconds
            </p>
            <button className="home-button"><Link to='/pokemons' className="link">Pokemons</Link></button>
        </div>
     );
}
 
export default Home;