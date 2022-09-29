import { useContext, useState } from "react";
import { actionAddTask } from "../actions/taskActions";
import DataContext from "./DataContext";

function AddTask({ id }) {

    const [focus, setFocus] = useState(false);
    const [text, setText] = useState('');

    const inputText = e => {
        const v = e.target.value;
        setText(v);
    }

    const { dispachTasks, getId, tasks } = useContext(DataContext);


    const createTask = () => {
        if (text) {
            dispachTasks(actionAddTask({
                id: getId(),
                list: id,
                title: text,
                description: ''
            }));
        }

        setText('');
    }

    return (
        <input value={text} onChange={inputText} placeholder={focus ? '' : '+ Add new task'} className='task addTask' style={{
            borderBottomLeftRadius: false ? null : '10px',
            borderBottomRightRadius: false ? null : '10px'
        }}
            onFocus={() => setFocus(true)} onBlur={() => { setFocus(false); createTask(); }} />
    );

}

export default AddTask;