import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuIcon, OptionsIcon } from 'svgs';
import CircularSlider from '@fseehawer/react-circular-slider';
import { updateTasks } from 'actions';
import TaskListPopup1 from 'components/TaskListPopup1/TaskListPopup1';
import {
    Wrapper, AppContainer, HeaderContainer, SqareIcon, NameWrapper, NotificationContainer, SearchBarContainer, TaskCount, AddTimeButton, DialWrapper, RedCircle, DialFlap, TimePopup, IputTime, CalenderWrapper, SetDateButton, CloseTimePopupBtn, SaveBtn, ErrorMessage, CloseMessage, BackBtn, RemainingTime
} from './ToDo.style';

function ToDo() {
    const inputNameRef = useRef();
    const inputTimeRef = useRef();
    const inputDateRef = useRef();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [showTimepop, setShowTimepop] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showTasks, setShowTasks] = useState(false);
    const [taskCount, setTaskCount] = useState(0);
    const [maxHrs, setMaxHrs] = useState(100);
    const [currentHrs, setCurrentHrs] = useState(0);
    const [homeScreen, setHomeScreen] = useState(true);
    const taskDetails = {
        name: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
    };

    function SaveTask() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        taskDetails.name = taskName;
        taskDetails.startDate = yyyy + '-' + mm + '-' + dd;
        taskDetails.startTime = today.getHours() + ':' + today.getMinutes();
        taskDetails.endDate = taskDate;
        taskDetails.endTime = taskTime;
        tasks.push(taskDetails);
        dispatch(updateTasks(tasks.slice()));
        setTaskCount(tasks.length);
        setShowMessage(true);
        setTaskName('');
        setTaskTime('');
        setTaskDate('');
    }

    function clearValues() {
        setTaskName('');
        setTaskTime('');
        setTaskDate('');
    }

    function showTaskStatus(task){
        let diff =(new Date(task.endDate).getTime() - new Date(task.startDate).getTime()) / 1000;
        diff /= (60 * 60);
        setMaxHrs(Math.abs(Math.round(diff)));
        diff =(new Date().getTime() - new Date(task.startDate).getTime()) / 1000;
        diff /= (60 * 60);
        setCurrentHrs(Math.abs(Math.round(diff)));
        setTaskName(task.name);
        setShowTasks(false);
        setHomeScreen(false);
        setShowTimepop(false);
    }

    function goToHomeScreen() {
        setHomeScreen(true);
        setTaskName('');
        setCurrentHrs(0);
        setMaxHrs(100);
    }

    function setDate() {
        if(new Date() < new Date(inputDateRef.current.value)) {
            setTaskDate(inputDateRef.current.value)
        } else {
            inputDateRef.current.value = '';
        }
    }

    return(
        <Wrapper>
            <AppContainer>
                <HeaderContainer>
                    <SqareIcon><MenuIcon></MenuIcon></SqareIcon>
                    <NameWrapper>Mike</NameWrapper>
                    {!showTasks && <NotificationContainer onClick={()=>setShowTasks(true)}>
                                <OptionsIcon/>
                                {(taskCount !=0) && <TaskCount>{taskCount}</TaskCount>}
                    </NotificationContainer>}
                    {showTasks && <NotificationContainer>
                        <BackBtn onClick={()=>{setShowTasks(false)}}>Back</BackBtn>
                    </NotificationContainer>}
                </HeaderContainer>
                <SearchBarContainer ref={inputNameRef} type="text" value={taskName} onChange={()=> {setTaskName(inputNameRef.current.value)}} spellCheck={false} placeholder="Type task name"/>
                <DialWrapper>
                    <div id="slider"></div>
                    <CircularSlider
                        hideLabelValue="true"
                        knobColor="red"
                        progressColorFrom="red"
                        progressColorTo="red"
                        trackSize={2}
                        progressSize={1}
                        min={0}
                        max={maxHrs}
                        dataIndex={currentHrs}
                        width={220}
                    >
                        <RedCircle/>
                    </CircularSlider>
                </DialWrapper>
                   <DialFlap />
                   {(taskName != '' && taskTime != '' && taskDate != '') && <SaveBtn onClick={()=>{SaveTask()}}>Save Task</SaveBtn>}
                   {!homeScreen && <RemainingTime>{`${maxHrs-currentHrs} Hrs left`}</RemainingTime>}
                {homeScreen && <AddTimeButton onClick={()=>{setShowTimepop(true)}}>Add Time</AddTimeButton>}
                {!homeScreen && <AddTimeButton onClick={()=>{goToHomeScreen()}}>Home Screen</AddTimeButton>}
                {showTimepop && <TimePopup>
                    <IputTime ref={inputTimeRef} onChange={()=>{setTaskTime(inputTimeRef.current.value)}} type="time"/>
                    <CalenderWrapper ref={inputDateRef} type="date" onChange={()=>{setDate()}}/>
                    <SetDateButton onClick={()=>{setShowTimepop(false)}}>Set Date</SetDateButton>
                    <CloseTimePopupBtn onClick={()=>{clearValues(); setShowTimepop(false)}}>⨉</CloseTimePopupBtn>
                    </TimePopup>
                }
                {showTasks && 
                    <TaskListPopup1 showTaskStatus={showTaskStatus}></TaskListPopup1>
                }
                {showMessage && <ErrorMessage>
                    Task Saved!
                    <CloseMessage onClick={()=>{setShowMessage(false)}}>⨉</CloseMessage>
                </ErrorMessage>}
            </AppContainer>
        </Wrapper>
    );
}

export default ToDo;
