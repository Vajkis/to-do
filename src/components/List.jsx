import { useState } from "react";
import Task from "./Task";

function List() {

    const [list, setList] = useState([])

    return (
        <>
            {list.map(l => {
                return (
                    <div key={l.id}>
                        {l.title}
                        <Task />
                    </div>
                );
            })}
        </>
    );
}

export default List;