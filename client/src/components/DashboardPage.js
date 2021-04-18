import React, {useState, useEffect } from 'react'
import '../css/DashboardPage.css';
import firebase from './Firebase';


function DashboardPage () {

    const aggregateDuration = (member) => {
        if (!member || !member.timeRecord) {
            return "0 hours";
        }

        const keys = Object.keys(member.timeRecord);

        let durations = keys.map((m) => {
            return parseInt(member["timeRecord"][`${m}`]["duration"]);
        });
        return `${(durations.reduce((accumulator, currentValue) => accumulator + currentValue) / 60).toFixed(2)} hours`;
    }

    const [members, setMembers] = useState([])
    const projectId = 'project111231414';
    useEffect(() => {
        const membersRef = firebase.database().ref('projects/' + projectId  + "/members");
        membersRef.on('value', (snapshot) => {
            const member = snapshot.val();
            const membersList = [];
            for (let _id in member) {
                membersList.push({ id : _id, ...member[_id] });
            }
            setMembers(membersList);
        }); 
      }, [])

    return (
        <div className="dashboard-container">
            <h4>You:</h4>
            <div className = "member-card-row">
                <div className = "member-card">
                    <div className = "member-name">
                        Smith
                    </div>
                    <div className = "member-detail-container">
                        <div className = "member-detail-row">
                            <div className = "detail-title">
                                Total hours spent
                            </div>
                            <div className = "detail-value">
                                11 hours
                            </div>
                        </div>
                        <div className = "member-detail-row">
                            <div className = "detail-title">
                                No. Contributions
                            </div>
                            <div className = "detail-value">
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Other team members:</h4>
            <div className = "member-card-row">
                {members.map(member => (
                    
                    member.memberName ? (<div className = "member-card">
                        <div className = "member-name">
                            {member.memberName}
                        </div>
                        <div className = "member-detail-container">
                            <div className = "member-detail-row">
                                <div className = "detail-title">
                                    Total hours spent
                                </div>
                                <div className = "detail-value">
                                    {aggregateDuration(member)}
                                </div>
                            </div>
                            <div className = "member-detail-row">
                                <div className = "detail-title">
                                    No. Contributions
                                </div>
                                <div className = "detail-value">
                                    {member.timeRecord ? Object.keys(member.timeRecord).length : 0}
                                </div>
                            </div>
                        </div>
                    </div>) : null
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;