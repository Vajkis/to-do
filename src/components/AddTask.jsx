import { useState } from "react";

function AddTask() {

    const [focus, setFocus] = useState(false);
    const [text, setText] = useState('');

    const inputText = e => {
        const v = e.target.value;
        setText(v);
    }

    const createTask = () => {

    }

    return (
        <input value={text} onChange={inputText} placeholder='+ Add new task' className='task addTask'
            onFocus={() => setFocus(true)} onBlur={() => { setFocus(false); createTask(); }} />
    );

}

export default AddTask;