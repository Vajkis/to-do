import { useContext } from "react";
import DataContext from "./DataContext";

function Tasks({ id }) {

    const { tasks } = useContext(DataContext);
    const thisTasks = [...tasks].filter(t => t.list === id);

    return (
        <>
            {thisTasks.map((t, i) =>
                <div key={t.id} className='task' style={{
                    borderBottomLeftRadius: i === thisTasks.length - 1 ? '10px' : null,
                    borderBottomRightRadius: i === thisTasks.length - 1 ? '10px' : null
                }}>
                    <div className='title'>{t.title}</div>
                    <div className='description'>{t.description}</div>
                </div>
            )}
        </>
    );
}

export default Tasks;