import styled from 'styled-components';

export const TaskListPopup = styled.div`
    position: absolute;
    width: 25vw;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1e2934;
    height: 55.6vh;
    top: 14%;
    overflow-y: auto;
`;

export const Task = styled.div`
    position: relative;
    height: 6vh;
    width: 22vw;
    top: 13%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 3vh;
    color: white;
    border-bottom: 0.1vh solid #575757;
    padding: 1vh;
    box-sizing: border-box;
    cursor: pointer;
`;

export const TasksText = styled(Task)`
    position: absolute;
    top: 2%;
    text-align: left;
    cursor: auto;
`;