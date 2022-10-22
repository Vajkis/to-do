import { addTask_const, completeTask_const, editTask_const, loadTasks_const, returnTask_const, setTaskFocus_const } from "../constants/taskConstants";

function tasks_reducer(state, action) {

    let newState = state ? [...state] : JSON.parse(localStorage.getItem('tasksData')) || [];

    switch (action.type) {

        case loadTasks_const:
            newState = JSON.parse(localStorage.getItem('tasksData'))?.map(t => ({ ...t, focus: false })) || []
            break;

        case addTask_const:
            newState.unshift(action.payload);
            break;

        case setTaskFocus_const:
            newState = newState.map(t => ({ ...t, focus: t.id === action.payload }));
            break;

        case editTask_const:
            newState = newState.map(t => t.id === action.payload.id ? { ...t, ...action.payload, focus: false } : { ...t });
            break;

        case completeTask_const:
            newState = newState.map(t => t.id === action.payload ? { ...t, completed: true } : { ...t, focus: false })
            break;

        case returnTask_const:
            newState = newState.map(t => t.id === action.payload ? { ...t, completed: false } : { ...t, focus: false })
            break;
        default:
    }

    return newState;
}

export default tasks_reducer;