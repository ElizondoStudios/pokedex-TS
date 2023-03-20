import { FC, useState, useEffect } from "react";

import Table from "./Table";

import { Moves as Props } from "./interfaces";


const Moves: FC<Props> = ({moves}) => {
    const [ShowMoves, setShowMoves] = useState<boolean>(false)
    const movesArr= moves.map(e => e.move.name)

    useEffect(() => {
        setShowMoves(false)
    }, [moves])

    const toggleShowMoves= () => {
      setShowMoves(prevShowMoves => !prevShowMoves)
    }

    return ( 
        <div className="container mt-4">
            <h2 onClick={toggleShowMoves} style={{cursor: "pointer"}}>Moves:</h2>
            {
                ShowMoves &&
                <Table
                 tableHead={["Name:"]}
                 tableBody={movesArr}
                />
            }
        </div>
     )
}
 
export default Moves;