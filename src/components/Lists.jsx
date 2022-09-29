import { useContext } from "react";
import AddTask from "./AddTask";
import DataContext from "./DataContext";
import Tasks from "./Tasks";

function Lists() {

    const { lists } = useContext(DataContext);

    return (
        <>
            {lists.map(l => {
                return (
                    <div className='list' key={l.id}>
                        <div className='listTitle'>{l.title}</div>
                        <AddTask id={l.id} />
                        <Tasks id={l.id} />
                    </div>
                );
            })}
        </>
    );
}

export default Lists;