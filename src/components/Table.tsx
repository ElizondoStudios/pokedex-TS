import { FC } from "react";
import { nanoid } from "nanoid";

import { Table as Props } from "./interfaces";

const Table: FC<Props> = ({tableHead, tableBody}) => {
    const tableHeadJSX= tableHead.map(e => <th key={nanoid()}>{e}</th>)

    const tableBodyJSX= tableBody.map(e => <tr key={nanoid()}><td>{e}</td></tr>)

    return ( 
        <div className="container">
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        {tableHeadJSX}
                    </tr>
                </thead>
                <tbody>
                        {tableBodyJSX}
                </tbody>
            </table>
        </div>
     )
}
 
export default Table;