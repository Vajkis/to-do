import { useContext } from "react";
import DataContext from "./DataContext";
import Task from "./Task";

function List() {

    const { list } = useContext(DataContext);

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