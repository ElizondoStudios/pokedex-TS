import { FC, useRef, useState } from "react";
import { useNavigate } from 'react-router';

const SearchBar:FC = () => {
    const [Validated, setValidated] = useState<string>("")
    const navigate= useNavigate()
    const searchInput= useRef<HTMLInputElement>(null)
    const formRef= useRef<HTMLFormElement>(null)

    function searchPokemon(event:  React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        const search: string= searchInput.current? searchInput.current.value.trim().toLowerCase(): ""

        if(formRef.current)
            if(formRef.current.checkValidity()){
                setValidated("")
                navigate(search)
            }
            else 
                setValidated("was-validated")
    }


    return ( 
        <form className={`container ${Validated}`} ref={formRef}>
            <div className="input-group">
                <div className="form-floating">
                <input type="text" name="pokemon" id="pokemon"
                 className="form-control form-control-sm"
                 ref={searchInput} placeholder="Pokemon"
                 required
                 pattern="[a-zA-Z0-9]+" title="pokemon name"
                />
                <label htmlFor="pokemon" className="text-dark">Pokémon name or number</label>
                </div>
                <button className="btn btn-dark border" onClick={searchPokemon}>Search</button>
            </div>
        </form>
     )
}
 
export default SearchBar;