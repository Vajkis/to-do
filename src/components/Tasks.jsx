import { useContext, useState } from "react";
import { completeTask_action, deleteTask_action, editTask_action, loadTasks_action, setTaskFocus_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function Tasks() {

    const { tasks, dispachTasks } = useContext(DataContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const editTask = id => {
        if (title) {
            dispachTasks(editTask_action({
                id,
                title,
                description
            }))
        }
    }

    const focusTask = t => {

        return (
            <div key={t.id}>
                <textarea value={title} onChange={e => setTitle(e.target.value)} placeholder='Title'></textarea>
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Description'></textarea>
                <button onClick={() => dispachTasks(loadTasks_action())}>Cancel</button>
                <button onClick={() => editTask(t.id)}>Save</button>
            </div>
        );
    }

    const blurTask = t => {
        return (
            <div className='task' key={t.id} >
                <input type='checkbox' checked={t.completed} onChange={() => dispachTasks(completeTask_action(t.id))} />
                <div className='task-data' onClick={() => {
                    setTitle(() => t.title);
                    setDescription(() => t.description);
                    dispachTasks(setTaskFocus_action(t.id));
                }}>
                    <h2>{t.title}</h2>
                    <p>{t.description}</p>
                </div>
                <button onClick={() => dispachTasks(deleteTask_action(t.id))}>Delete</button>
            </div>
        );
    }


    return (
        <div className='tasks-group'>
            {tasks?.map((t) => t.deleted ? null : t.completed ? null : t.focus ? focusTask(t) : blurTask(t))}
        </div>
    );
}

export default Tasks;