import { useContext } from "react";
import { deleteTask_action, returnTask_action } from "../actions/taskActions";
import DataContext from "./DataContext";

function CompletedTasks() {

    const { tasks, dispachTasks } = useContext(DataContext);

    return (
        <div>
            {tasks?.map((t) => t.deleted ? null : !t.completed ? null :
                <div className='task' key={t.id} >
                    <input type='checkbox' checked={t.completed} onChange={() => dispachTasks(returnTask_action(t.id))} />
                    <div className='task-data completed-task-data'>
                        <h2>{t.title}</h2>
                        <p>{t.description}</p>
                    </div>
                    <button onClick={() => dispachTasks(deleteTask_action(t.id))}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default CompletedTasks;