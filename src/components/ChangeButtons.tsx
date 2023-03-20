import { FC } from "react";

interface Props{
    currentPokemon: number
    nextPokemon(): void
    prevPokemon(): void
}

const ChangeButtons:FC<Props> = ({currentPokemon, nextPokemon, prevPokemon}) => {
    return ( 
        <div className="change-buttons">
            {
                currentPokemon>1 &&
                <button className="change-buttons--left" onClick={prevPokemon}></button>
            }
            <button className="change-buttons--right" onClick={nextPokemon}></button>
        </div>
     )
}
 
export default ChangeButtons;