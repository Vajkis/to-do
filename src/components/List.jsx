import { useContext } from "react";
import AddTask from "./AddTask";
import DataContext from "./DataContext";
import Task from "./Task";

function List() {

    const { list } = useContext(DataContext);

    return (
        <>
            {list.map(l => {
                return (
                    <div className='list' key={l.id}>
                        <div className='title'>{l.title}</div>
                        <AddTask />
                        <Task />
                    </div>
                );
            })}
        </>
    );
}

export default List;