import { addTask_const, loadTasks_const, setTaskFocus_const } from "../constants/taskConstants";

function tasks_reducer(state, action) {

    let newState = state ? [...state] : [];

    switch (action.type) {
        case loadTasks_const:
            newState = [];
            break;

        case addTask_const:
            newState.unshift(action.payload);
            break;

        case setTaskFocus_const:
            newState = newState.map(t => ({ ...t, focus: t.id === action.payload }));
            break;
        default:
    }

    return newState;
}

export default tasks_reducer;