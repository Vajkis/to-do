import { useContext } from "react";
import DataContext from "./DataContext";

function Tasks({ id }) {

    const { tasks } = useContext(DataContext)

    return (
        <>
            {tasks.map((t, i) => t.list === id ?
                <div key={t.id} className='task' style={{
                    borderBottomLeftRadius: i === tasks.length - 1 ? '10px' : null,
                    borderBottomRightRadius: i === tasks.length - 1 ? '10px' : null
                }}>
                    <div className='title'>{t.title}</div>
                    <div className='description'>{t.description}</div>
                </div>
                : null)
            }
        </>
    );
}

export default Tasks;