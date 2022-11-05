import { useContext } from "react";
import { deleteAllTasks_action, deleteCompletedTasks_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function ListMenu() {

    const { dispachTasks } = useContext(DataContext)

    return (
        <div className='list-menu'>
            <button onClick={() => dispachTasks(deleteCompletedTasks_action())}>Delete completed tasks</button>
            <button onClick={() => dispachTasks(deleteAllTasks_action())}>Delete all tasks</button>
        </div>
    )
}

export default ListMenu;