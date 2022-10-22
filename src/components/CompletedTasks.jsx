import { useContext } from "react";
import { completeTask_action, returnTask_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function CompletedTasks() {

    const { tasks, dispachTasks } = useContext(DataContext);

    return (

        tasks?.map((t) => t.completed ?
            <div className='task' key={t.id} >
                <input type='checkbox' checked={t.completed} onChange={() => dispachTasks(returnTask_action(t.id))} />
                <div className='taskData completedTaskData'>
                    <h2>{t.title}</h2>
                    <p>{t.description}</p>
                </div>
            </div> : null)
    );
}

export default CompletedTasks;