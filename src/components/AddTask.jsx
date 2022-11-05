import { useContext, useState } from "react";
import { addTask_action } from "../actions/taskActions";
import getId from "../functions/getId";
import DataContext from "./DataContext";

function AddTask() {

    const { dispachTasks } = useContext(DataContext);

    const [text, setText] = useState('');

    const editText = e => {
        const v = e.target.value;
        setText(() => v);
    }

    const addTask = key => {
        if (key === 'Enter' && text) {
            dispachTasks(addTask_action({
                id: getId(),
                listId: '',
                title: text,
                description: '',
                focus: false,
                completed: false,
                deleted: false
            }));
            setText(() => '');
        }
    }

    return (
        <div className='task'>
            <input className='add-task-input' value={text} onChange={e => editText(e)} onKeyDown={e => addTask(e.key)} onBlur={() => addTask('Enter')} placeholder='Title' />
            <button onClick={() => addTask('Enter')}>Add Task</button>
        </div>
    )
}

export default AddTask;