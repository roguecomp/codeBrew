import React, {useState, useEffect } from 'react'
import { Button,Container,Col, Row } from 'react-bootstrap';
import {Avatar} from '@material-ui/core'
import firebase from './firebase'
import NavBar from './NavBar'
import '../css/TeamPage.css'

export default function TeamPage(){
    /* expected struct:
    { 
            id : xxxxxxx
            name: "task1",
            description : "des1"  
        } and 
        { 
            id : xxxxxxx
            Avatar : "../asserts/avatar/1.png",
            name: "zzpp",
            email : "e1"  
        }
        */
    const [tasks, setTasks] = useState([])
    const [members, setMembers] = useState([])
    useEffect(() => {
        const tasksRef = firebase.database().ref('Task');
        tasksRef.on('value', (snapshot) => {
          const tasks = snapshot.val();
          const tasksList = [];
          for (let _id in tasks) {
            tasksList.push({ id : _id, ...tasks[id] });
          }
          setTasks(tasksList);
        });   
      }, [])

    const handleEdit= () => {}
    const handleDelete= (id) => {
        const tasksRef = firebase.database().ref('Task').child(id);
        tasksRef.remove()
    }
    const handleRemove = () => {}
    const handleAddTask = () => {
        const taskName = "fake task" + tasks.length
        const taskDescription = "Later on we will provide a form to fill the details of the task"
        const taskRef = firebase.database().ref('Task');
        const newTask = {
            name: taskName,
            description : taskDescription,
        }
        taskRef.push(newTask)
    }
    return (
        <div>
        <NavBar hideLinks = {false}/>
        <Container>
            <Row>
                <Col md = {7}>
                    <div className = "Block1">
                        <div className = "Block1Content">
                        <Row>
                                <Col md ={7}><text className = "Title">Tasks</text>
                                <text className = "Total">{tasks.length} total</text></Col>
                                <div style = {{paddingTop : 15}}>
                                    <Col><button className = "AddButton" onClick = {handleAddTask}>+ Add New Task</button></Col>
                                </div>
                        </Row>
                        <text className="sortBy">Sort By: Newest</text>
                        <Row>
                            <Col md = {2}><text className = "subTitle"> Task</text></Col>
                            <Col md = {4}><text className = "subTitle"> description</text></Col>                       
                        </Row>
                        <hr className = "Sep"></hr>
                        
                        {tasks.map(task => (
                            <>
                            <Row>
                                <Col md = {2}>                                   
                                    <text>{task.name}</text>
                                </Col>
                                <Col md = {5}>
                                    <text>{task.description}</text>
                                </Col>
                                <Col md = {2}><Button 
                                    variant = "light"
                                    onClick = {handleEdit}
                                    >
                                    Edit
                                </Button></Col>
                                <Col><Button 
                                    variant = "light"
                                    onClick={() => handleDelete(task.id)}
                                    >
                                    Delete
                                </Button></Col>                        
                        </Row>  
                        <hr className = "Sep"></hr>
                        </>     
                    ))}
                    </div>             
                    </div>
                </Col>
                    
                <Col>
                    <div className = "Block2">
                    <div className = "Block2Content">
                        <Row>
                                <Col md ={7}><text className = "Title">Members</text>
                                <text className = "Total">{members.length} total</text></Col>
                                <div style = {{paddingTop : 15}}>
                                    <Col><button className = "AddButton" >+ Add Member</button></Col>
                                </div>
                        </Row>
                        <br/>
                        {members.map(member => (
                        <>
                        <Row>
                        <Col md = {3}><Avatar>{member.name[0]}</Avatar></Col>
                        <Col md = {5}>        
                        <Row><text className = "MemberName">{member.name}</text></Row>
                        <Row><text className = "MemberEmail">{member.email}</text></Row>
                        </Col>   
                            <Col md = {3}><Button 
                                variant = "light"
                                onClick = {handleRemove}
                                >
                                Remove
                            </Button></Col>                      
                        
                        </Row>
                        <br/>
                        </>     
                    ))}
                    </div>  
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}


