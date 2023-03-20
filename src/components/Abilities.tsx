import { FC, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

import { Abilities as Props } from "./interfaces";

const Abilities:FC<Props> = ({abilities}) => {
    const [ShowAbilities, setShowAbilities] = useState<boolean>(false)
    const abilitiesURLs= abilities.map( e => e.ability.url)
    const Abilities= useRef<{name: string, description: string}[]>([])

    useEffect(() => {
      setShowAbilities(false)
    }, [abilities])

    useEffect(() => {
        const abilitiesData: {name: string, description: string}[]=[]

        const promises: Promise<Response>[]=[]
        abilitiesURLs.forEach(element => {
          promises.push(fetch(element))
        })

        type dataType={
            name: string,
            effect_entries: {effect:string, language: {name: string, url: string}, short_effect: string}[]
        }

        Promise.all(promises)
          .then(responses => responses.map(res =>
              res.json().then((data: dataType) =>
                  abilitiesData.push({name: data.name, description: findEffectEnglish(data.effect_entries)})
              )
              )
          )
        Abilities.current= abilitiesData
    },[abilities])

    const toggleShowAbilities= () => {
        setShowAbilities(prevShowAbilities => !prevShowAbilities)
    }

    const tableBody= Abilities.current.map(e =>
        <tr key={nanoid()}>
            <td>{e.name}</td>
            <td>{e.description}</td>
        </tr>
    )

    function findEffectEnglish(effect_entries: {effect:string, language: {name: string, url: string}, short_effect: string}[]): string{        
        effect_entries.forEach(e =>{
            if(e.language.name==="en"){
                return e.short_effect
            }
        })
        return effect_entries[1].short_effect
    }


    return (
        <div className="container mt-4">
            <h2 onClick={toggleShowAbilities} style={{cursor: "pointer"}}>Abilities:</h2>
            {
                ShowAbilities &&
                <div className="container-md">
                    <table className="table table-dark table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name:</th>
                                <th>Description:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            }
        </div>
     )
}
 
export default Abilities;