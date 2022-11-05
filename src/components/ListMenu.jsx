import { useState } from "react";
import { useContext } from "react";
import { deleteAllTasks_action, deleteCompletedTasks_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function ListMenu() {

    const { dispachTasks } = useContext(DataContext);

    const [focus, setFocus] = useState(false);

    return (
        <div className='list-menu'>
            <div onClick={() => setFocus(f => !f)}>{focus ? 'Hide menu' : 'Show menu'}</div>
            {!focus ? null :
                <>
                    <button onClick={() => dispachTasks(deleteCompletedTasks_action())}>Delete completed tasks</button>
                    <button onClick={() => dispachTasks(deleteAllTasks_action())}>Delete all tasks</button>
                </>
            }
        </div>
    );
}

export default ListMenu;