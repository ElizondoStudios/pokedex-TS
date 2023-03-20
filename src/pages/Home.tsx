import { FC } from "react";

import pokeball_background_img from '../assets/pokeball-background.png'


const Home:FC = () => {
    return ( 
        <div className="container container-fluid mt-4">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h2>Search a Pokémon by name or number</h2>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <img src={pokeball_background_img} alt="pokeball" className="pokeball-background"/>
            </div>
          </div>
        </div>
     )
}
 
export default Home;