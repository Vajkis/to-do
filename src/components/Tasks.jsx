import { useContext, useState } from "react";
import DataContext from "./DataContext";

function Tasks() {

    const { tasks } = useContext(DataContext);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const focusTask = t => {

        setTitle(() => t.title);
        setDescription(() => t.description)

        return (
            <div>
                <textarea value={title} onChange={e => e.target.value}></textarea>
                <textarea value={description} onChange={e => e.target.value}></textarea>
            </div>
        );
    }

    const blurTask = t => {
        return (
            <div key={t.id}>
                <h2>{t.title}</h2>
                <p>{t.description}</p>
            </div>
        );
    }


    return (
        <>
            {tasks?.map((t) => t.focus ? focusTask(t) : blurTask(t))}
        </>
    );
}

export default Tasks;