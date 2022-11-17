import PokeList from "./pokelist";
import useApi from "./useApi";

const PokeApp = () => {
    const {loading, error, poke} = useApi('https://pokeapi.co/api/v2/pokemon/ditto')

    return ( 
        <div className="poke">
            {loading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {poke && <PokeList pokes = {poke.game_indices} />}
        </div>
     );
}
 
export default PokeApp;