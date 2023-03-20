import { FC, useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { Stats as Props } from "./interfaces";

const Stats: FC<Props> = ({stats}) => {
    const [ShowStats, setShowStats] = useState<boolean>(false)
    const statNames=stats.map(e => e.stat.name)
    const statValues= stats.map(e => e.base_stat)

    useEffect(() => {
        setShowStats(false)
    }, [stats])

    const toggleShowStats= () => {
      setShowStats(prevShowStats => !prevShowStats)
    }

    const getStyleStat= (val:string) => {
      const num= parseInt(val)
        if(num<40)
            return "danger"
        else if(num<90)
            return "warning"
        return "success"
    }

    const tableEntries= statNames.map((name, i) => 
        <tr key={nanoid()}>
            <td>{name}</td>
            <td className={`text-${getStyleStat(statValues[i])}`}>{statValues[i]}</td>
        </tr>
    )

    return ( 
        <div className="container mt-4">
            <h2 onClick={toggleShowStats} style={{cursor: "pointer"}}>Stats:</h2>
            {
                ShowStats &&
                <div className="container-md">
                    <table className="table table-dark table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name:</th>
                                <th>Value:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableEntries}
                        </tbody>
                    </table>
                </div>
            }
        </div>
     )
}
 
export default Stats;