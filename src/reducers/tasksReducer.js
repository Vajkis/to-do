import { addTask_const } from "../constants/taskConstants";

function tasks_reducer(state, action) {

    const newState = [...state];
    switch (action.type) {
        case addTask_const:

            break;
        default:
    }

    return newState;
}

export default tasksReducer;