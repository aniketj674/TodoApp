import styled from 'styled-components';

export const Wrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    user-select: none;
`;

export const AppContainer = styled.div`
    position: absolute;
    width: 25vw;
    height: 65vh;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    background-color: #1e2934;
    overflow: hidden;
`;

export const HeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 15%;
    left: 50%;
    transform: translateX(-50%);

`;

export const SqareIcon = styled.div`
    position: relative;
    width: 15%;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    float: left;
`;

export const NameWrapper = styled(SqareIcon)`
    width: 65%;
    color: white;
    font-size: 3vh;
    padding-top: 2.2vh;
    padding-left: 3%;
`;

export const NotificationContainer = styled(SqareIcon)`
    width: 20%;
`;

export const TaskCount = styled.div`
    position: absolute;
    width: 1.5vw;
    height: 3vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2.5vh;
    border-radius: 50%;
    background-color: red;
    text-align: center;
`;

export const SearchBarContainer = styled.input`
    position: absolute;
    width: 90%;
    height: 10%;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 3vh;
    padding: 1.6vh 1vw;
    box-sizing: border-box;
    border-radius: 1vw;
    background-color: #3a4550;
    border: none;
`;

export const AddTimeButton = styled.button`
    position: absolute;
    width: 90%;
    height: 10%;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 3vh;
    box-sizing: border-box;
    border-radius: 1vw;
    background-color: #3a4550;
    border: none;
    cursor: pointer;
`;

export const DialWrapper = styled.div`
    position: absolute;
    width: 58%;
    height: 46%;
    top: 32%;
    left: 50%;
    transform: translateX(-50%);
`;

export const DialFlap = styled(DialWrapper)`
    top: 28%;
    width: 80%;
    height: 53%;
`;

export const RedCircle = styled.div`
`;

export const TimePopup = styled(AppContainer)`
    height: 46vh;
    left: 50%;
    top: 29%;
`;

export const IputTime = styled(SearchBarContainer)`
    width: 50%;
    top: 5%;
`;

export const CalenderWrapper = styled(SearchBarContainer)`
    position: absolute;
    top: 22%;
`;

export const SetDateButton = styled(AddTimeButton)`
    left: 3%;
    width: 77%;
    transform: translateX(0%);
    background-color: green;
    bottom: 8%;
`;

export const CloseTimePopupBtn = styled(SetDateButton)`
    left: 85%;
    width: 2.5vw;
    background-color: red;
    border-radius: 0.5vw;
    padding: 0.3vw;
`;

export const SaveBtn = styled(SetDateButton)`
    border-radius: 0.5vw;
    width: 40%;
    left: 30%;
    top: 50%;
`;

export const ErrorMessage = styled.div`
    position: absolute;
    width: 90%;
    height: 7%;
    color: white;
    font-size: 2vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: #3a4550;
    border: 1vh solid white;
    padding-top: 2vh;
`;

export const CloseMessage = styled.button`
    position: absolute;
    height: 2vh;
    width: 1.5vw;
    top: 0%;
    right: 0%;
    background-color: red;
    border: none;
    color: white;
    cursor: pointer;
`;

export const BackBtn = styled.button`
    position: absolute;
    top: 26%;
    left: 1%;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 2.5vh;
    cursor: pointer;
`;

export const RemainingTime = styled.div`
    top: 50%;
    border: none;
    position: relative;
    height: 6vh;
    width: 22vw;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 3vh;
    color: white;
    padding: 1vh;
    box-sizing: border-box;
    cursor: pointer;
`;
