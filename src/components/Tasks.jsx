import { useContext } from "react";
import DataContext from "./DataContext";

function Tasks() {

    const { tasks } = useContext(DataContext)

    return (
        <>
            {tasks.map(t => <div key={t.id} className='task'>
                <div className='title'>{t.title}</div>
                <div className='description'>{t.description}</div>
            </div>)}
        </>
    );
}

export default Tasks;