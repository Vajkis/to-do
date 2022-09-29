import { useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";

function Tasks({ id }) {

    const { tasks } = useContext(DataContext);
    const [thisTasks, setThisTasks] = useState([]);

    useEffect(() => {
        setThisTasks([...tasks].filter(t => t.list === id))
    }, [tasks, id])

    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const edit = tId => {
        setThisTasks(t => t.map(t => {
            if (t.id === tId && !t.editing) {
                setEditTitle(t.title)
            }
            return { ...t, editing: t.id === tId }
        }));


    }

    return (
        <>
            {thisTasks.map((t, i) =>
                <div key={t.id} className='task' onClick={() => edit(t.id)} style={{
                    borderBottomLeftRadius: i === thisTasks.length - 1 ? '10px' : null,
                    borderBottomRightRadius: i === thisTasks.length - 1 ? '10px' : null,
                    backgroundColor: t.editing ? '#303138' : null
                }}>
                    {
                        t.editing
                            ? <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                            : <div className='title'>{t.title}</div>
                    }

                    {
                        t.editing
                            ? <input value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                            : <div className='description'>{t.description}</div>
                    }

                </div>
            )}
        </>
    );
}

export default Tasks;