import firebase, {auth} from './Firebase';

function LogEvent(receiverUid,messageType, messageContent ){
    firebase.database().ref('personalLog/' + receiverUid).push(
        {
            type: messageType,
            value: messageContent,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })


}


function changeFriendList(isAdd, receiverUid,myId){
    if (isAdd){
        firebase.database().ref('globalUserStatus/userFriends/' + myId + "/" + receiverUid).push(
            {
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                action: "add friend"
            })
            

    }else{
        if (myId != "" &&  receiverUid != ""){
            firebase.database().ref('globalUserStatus/userFriends/' + myId + "/" +receiverUid ).set(null)

        }
        

    }
    
}

function sentCalendarEvent(eventTitle, startTime, endTime){
    firebase.database().ref('calendarEvents/' + auth.currentUser.uid).push(
        {
            title: eventTitle,
            start: startTime.getTime(),
            end: endTime.getTime()
        })
    
}

function saveCurrentTime(totalTime, workingTime, breakTime){
    firebase.database().ref('currentTimerValue/' + auth.currentUser.uid).push(
        {
    
            totalTime: totalTime,
            workingTime: workingTime,
            breakTime : breakTime,

        })

}
export {changeFriendList, sentCalendarEvent};

export default LogEvent; 