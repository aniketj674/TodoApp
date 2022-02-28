import React from 'react';
import { useSelector } from 'react-redux';
import {
    TaskListPopup, Task, TasksText,
} from './TaskListPopup1.style';

function TaskListPopup1(props) {
    const {showTaskStatus} = props;
    const tasks1 = useSelector(state => state.tasks);

    function getTasks() {
        const taskList = [];
        tasks1.map((task) => {
            taskList.push(
                <Task key={task.name} onClick={()=>showTaskStatus(task)}>
                    {task.name}
                </Task>,
            );
        });
        return taskList;
    }

    return(
        <TaskListPopup>
            <TasksText>Tasks:</TasksText>
            {getTasks()}
        </TaskListPopup>
    );
}

export default TaskListPopup1;