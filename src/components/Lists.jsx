import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import Tasks from "./Tasks";

function Lists() {

    return (
        <div className='list'>
            <h1>To-Do List</h1>
            <AddTask />
            <Tasks />
            <CompletedTasks />
        </div>
    );
}

export default Lists;