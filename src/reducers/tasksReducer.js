import { addTaskConst } from "../constants/taskConstants";

function tasksReducer(state, action) {

    const newState = [...state];
    switch (action.type) {
        case addTaskConst:
            newState.unshift({
                id: action.payload.id,
                list: action.payload.list,
                title: action.payload.title,
                description: action.payload.description
            })
            break;
        default:
    }

    return newState;
}

export default tasksReducer;