import React, { useEffect, useState } from "react";
import { getPokemonData } from "../api/dataFetcher";

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState(null);
    const [pokemonId, setPokemonId] = useState(25);
    const [showErrorMsg, setShowErrorMsg] = useState(false);


    const fetchData = async (id) => {
        const pokemonCharacterData = await getPokemonData(id);

        setPokemon(pokemonCharacterData);
    };

    const onIdValueChanged = (value) => {
        setPokemonId(value);
        setShowErrorMsg(false);
    };

    const handleOnSubmit = () => {
        if (pokemonId >= 1 && pokemonId <= 151) {
            fetchData(pokemonId);
            setShowErrorMsg(false);
        }
        else {
            setShowErrorMsg(true);
        }
    };

    useEffect(() => {
        fetchData(25);
    }, []);

    return (
        <>
            <div className="pokemanContainer">
                {pokemon && pokemon.id &&
                    <div className="pokemanContainer_details">
                        <div className="pokemanContainer_details_info">
                            <div className="pokemanContainer_details_row">
                                <p>
                                    name: {pokemon.name}
                                </p>
                                <p>
                                    ID: {pokemon.id}
                                </p>
                            </div>
                            <div className="pokemanContainer_details_row">
                                <p>
                                    Type: {pokemon.types[0].type.name}
                                </p>
                            </div>
                            <div className="pokemanContainer_details_row">
                                <p>
                                    Height: {pokemon.height}
                                </p>
                                <p>
                                    Weight: {pokemon.weight}
                                </p>
                            </div>
                        </div>
                        <img className="pokemanImg" src={pokemon.sprites.front_default} alt='pokemanFront' />
                    </div>
                }
                <input
                    type='number'
                    value={pokemonId}
                    onChange={e => onIdValueChanged(e.target.value)}
                />
                <button onClick={() => handleOnSubmit()}>Submit</button>
                {showErrorMsg && <p className="errorMsg">Please enter a value from 1 to 151</p>}
            </div>

            <style jsx>{`
                .pokemanContainer {
                    width: 600px;
                    padding: 15px
                }
                .pokemanContainer_details{
                    display: flex;
                }
                .pokemanContainer_details_info{
                    width: 300px;
                }
                .pokemanContainer_details_row{
                    display: flex;
                    justify-content: space-between;
                }
                .pokemanImg{
                    height: 200px;
                    width: 200px;
                }
                .errorMsg{
                    color: red;
                }
            `}</style>
        </>


    )
};

export default Pokemon;
