import { addTask_const, completeTask_const, editTask_const, loadTasks_const, returnTask_const, setTaskFocus_const } from "../constants/taskConstants";

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

export function completeTask_action(taskId) {
    return {
        type: completeTask_const,
        payload: taskId
    };
}

export function returnTask_action(taskId) {
    return {
        type: returnTask_const,
        payload: taskId
    };
}