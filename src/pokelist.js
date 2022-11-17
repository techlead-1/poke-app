const PokeList = ({ pokes }) => {
    return ( 
        <div className="pokelist">
            {pokes.map((poke) => (
                <div className="poke" key={poke.version.name}>
                    <h2 className="poke-name">{ poke.version.name }</h2>
                    <a href={ poke.version.url } className="poke-link"> { poke.name } link</a>
                </div>
            ))}
        </div>
     );
}
 
export default PokeList;