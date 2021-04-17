import firebase, {auth} from './Firebase';

function LogTimeRecord(receiverProjectId,receiverUid,duration, task ){
    firebase.database().ref('projects/' + receiverProjectId + '/members/' +receiverUid + "/timeRecord"   ).push(
        {
            duration : duration,
            task : task

        })

}






export  {LogTimeRecord}; 