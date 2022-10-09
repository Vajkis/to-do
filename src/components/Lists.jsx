import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import Tasks from "./Tasks";

function Lists() {

    return (
        <>
            <h1>To-Do List</h1>
            <AddTask />
            <Tasks />
            <CompletedTasks />
        </>
    );
}

export default Lists;