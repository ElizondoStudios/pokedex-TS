import { FC } from 'react';

import { PokemonCard as Props } from './interfaces';

const PokemonCard: FC<Props> = ({Sprite, Pokemon, changeSprite}) => {
    return ( 
        <div className="card text-bg-dark border border-light border-2" style={{width: "50vw", maxWidth: "400px"}}>
            <img src={Sprite}
             alt="Pokemon sprite"
             className="pokemon-img card-img-top"
             onClick={changeSprite}
            />
            <div className="card-body">
                <h3 className="card-title">{Pokemon.species.name}</h3>
                <p className="card-text">
                    Number: {Pokemon.id}
                    <br/>
                    {Pokemon.types.length>1? `Types: ${Pokemon.types[0].type.name}/${Pokemon.types[1].type.name}`:
                        `Type: ${Pokemon.types[0].type.name}`
                    }
                    <br/>
                    Height: {Pokemon.height/10}m Weight: {Pokemon.weight/10}kg
                </p>
            </div>
        </div>
     )
}
 
export default PokemonCard;