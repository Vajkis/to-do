import { addTask_const, editTask_const, loadTasks_const, setTaskFocus_const } from "../constants/taskConstants";

export function loadTasks_action() {
    return { type: loadTasks_const };
}

export function addTask_action(newTaskData) {
    return {
        type: addTask_const,
        payload: newTaskData
    };
}

export function setTaskFocus_action(taskId) {
    return {
        type: setTaskFocus_const,
        payload: taskId
    };
}

export function editTask_action(taskData) {
    return {
        type: editTask_const,
        payload: taskData
    };
}