import { useState } from "react";
import Task from "./Task";

function List() {

    const [list, setList] = useState([])
    return (
        <>
            {list.map(l => <div key={l.id}><Task /></div>)}
        </>
    );
}

export default List;