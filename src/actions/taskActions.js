import { addTask_const, loadTasks_const } from "../constants/taskConstants";

export function loadTasks_action() {
    return { type: loadTasks_const };
}

export function addTask_action(newTaskData) {
    return {
        type: addTask_const,
        payload: newTaskData
    };
}