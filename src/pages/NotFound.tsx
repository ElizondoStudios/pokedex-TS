import { FC } from "react";

import { useNavigate } from 'react-router';

import sad_pikachu from '../assets/sad-pikachu.gif'

interface Props{
    currentPokemon: number
}

const NotFound:FC<Props> = ({currentPokemon}) => {
    const navigator= useNavigate()

    const returnToLast= () => {
        if(currentPokemon>0)
            navigator("/"+currentPokemon)
        else
            navigator("/1")
    }

    return ( 
        <div className="container mt-5 d-flex flex-column align-items-center gap-1">
            <h2>404 pokémon could not be found</h2>
            <img src={sad_pikachu} alt="crying pikachu" className="mt-3"/>
            <button className="btn btn-dark border mt-3" onClick={returnToLast}>Return to last pokémon</button>
        </div>
     )
}
 
export default NotFound;