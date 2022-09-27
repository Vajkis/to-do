import { addTaskConst } from "../constants/taskConstants";

export function actionAddTask(taskData) {
    return {
        type: addTaskConst,
        payload: taskData
    };
}