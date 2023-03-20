import {FC, useRef} from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import NotFound from './pages/NotFound';

import SearchBar from './components/SearchBar';
import ChangeButtons from './components/ChangeButtons';

const App: FC = () => {
  const currentPokemon= useRef<number>(0)

  const navigate= useNavigate()

  function changeCurrentPokemon(num: number){
    currentPokemon.current= num
  }

  function nextPokemon(){
    currentPokemon.current++
    navigate(""+currentPokemon.current)
  }

  
  function prevPokemon(){
    currentPokemon.current--
    navigate(""+currentPokemon.current)
  }

  return ( 
    <div className='container mt-4'>
      <SearchBar/>
      <ChangeButtons currentPokemon={currentPokemon.current} nextPokemon={nextPokemon} prevPokemon={prevPokemon}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/:id" element={<Pokemon changeCurrentPokemon={changeCurrentPokemon}/>}/> */}
        <Route path="/:id" element={<Pokemon/>}/>
        <Route path="/not-found" element={<NotFound currentPokemon={currentPokemon.current}/>}/>
        <Route path="*" element={<NotFound currentPokemon={currentPokemon.current}/>}/>
      </Routes>
    </div>
   )
}
 
export default App;
