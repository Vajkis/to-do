import { useContext, useState } from "react";
import DataContext from "./DataContext";

function AddList() {

    const { setList, getId } = useContext(DataContext);

    const [focus, setFocus] = useState(false);
    const [text, setText] = useState('');

    const inputText = e => {
        const v = e.target.value;
        setText(v);
    }

    const createList = () => {
        if (text) {
            setList(l => [...l, { id: getId(), title: text }]);
            setText('')
        }
    }

    return (
        <input className='list addList' placeholder={focus ? null : '+ Add new list'}
            onFocus={() => setFocus(true)} onBlur={() => { setFocus(false); createList(); }}
            value={text} onChange={inputText}
        />
    )
}

export default AddList;