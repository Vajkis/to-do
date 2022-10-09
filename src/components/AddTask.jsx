import { useContext, useState } from "react";
import { addTask_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function AddTask() {

    const { dispachTasks } = useContext(DataContext);

    const [text, setText] = useState('');

    const editText = e => {
        const v = e.target.value;
        setText(() => v);
    }

    const addTask = () => {
        dispachTasks(addTask_action({ title: text }));
        setText(() => '');
    }


    return (
        <>
            <input value={text} onChange={e => editText(e)} onBlur={addTask} />
            <button onClick={addTask}>Add Task</button>
        </>
    )

}

export default AddTask;