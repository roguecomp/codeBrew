import React, {useState, useEffect } from 'react'
import { Button,Container,Col, Row,Modal,Form } from 'react-bootstrap';
import {Avatar} from '@material-ui/core'
import firebase from './Firebase'
import NavBar from './NavBar'
import '../css/TeamPage.css'

export default function TeamPage(){
    const [tasks, setTasks] = useState([])
    const [members, setMembers] = useState([])
    const [show, setShow] = useState(false)
    const [newTaskName, setNewTaskName] = useState()
    const [newTaskDes, setNewTaskDes] = useState()
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const projectId = 'project111231414';
    useEffect(() => {
        const tasksRef = firebase.database().ref('projects/' + projectId   + "/task");
        tasksRef.on('value', (snapshot) => {
          const tasks = snapshot.val();
          const tasksList = [];
          for (let _id in tasks) {
            tasksList.push({ id : _id, ...tasks[_id] });
          }
          setTasks(tasksList);
        });

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

    const handleEdit= () => {}
    const handleDelete= (id) => {
        const tasksRef = firebase.database().ref('projects/' + projectId   + "/task").child(id);
        tasksRef.remove()
    }
    const handleRemove = () => {}
    const handleAddTask = () => {
        
        const taskName = newTaskName
        const taskDescription = newTaskDes
        const taskRef = firebase.database().ref('projects/' + projectId   + "/task");
        const newTask = {
            name: taskName,
            description : taskDescription,
        }
        taskRef.push(newTask)
        setShow(false)
        setNewTaskName()
        setNewTaskDes()
    }
    return (
        <div>
        <Container  >
            <Row>
                <Col md = {7}>
                    <div className = "Block1">
                        <div className = "Block1Content">
                        <Row>
                                <Col md ={7}><text className = "Title">Tasks</text>
                                <text className = "Total">{tasks.length} total</text></Col>
                                <div style = {{paddingTop : 15}}>
                                    <Col><button className = "AddButton" onClick = {handleShow}>+ Add New Task</button></Col>
                                </div>
                        </Row>
                        <text className="sortBy">Sort By: Newest</text>
                        <Row>
                            <Col md = {3}><text className = "subTitle"> Task</text></Col>
                            <Col md = {4}><text className = "subTitle"> description</text></Col>                       
                        </Row>
                        <hr className = "Sep"></hr>
                        
                        {tasks.map(task => (
                            <>
                            <Row>
                                <Col md = {3}>                                   
                                    <text className="MemberName">{task.name}</text>
                                </Col>
                                <Col md = {4}>
                                    <text className="MemberEmail">{task.description}</text>
                                </Col>
                                <Col md = {2}><Button 
                                    variant = "light"
                                    onClick = {handleEdit}
                                    className = "team-button"
                                    >
                                    Edit
                                </Button></Col>
                                <Col><Button 
                                    variant = "light"
                                    onClick={() => handleDelete(task.id)}
                                    className = "team-button"
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
                        <Col md = {3}><Avatar>{member.memberName?member.memberName[0] : "A"}</Avatar></Col>
                        <Col md = {5}>        
                        <Row><text className = "MemberName">{member.memberName?member.memberName : "Anonymous"}</text></Row>
                        <Row><text className = "MemberEmail">{member.memberEmail? member.memberEmail:"unknown"}</text></Row>
                        </Col>   
                            <Col md = {1}><Button 
                                variant = "light"
                                onClick = {handleRemove}
                                className = "team-button"
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
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Task name</Form.Label>
                    <Form.Control 
                        className = "taskName" 
                        type="text" 
                        placeholder="Enter task name here"
                        value = {newTaskName} 
                        onChange = {e => setNewTaskName(e.target.value)}
                        
                        
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    className = "taskDesc" 
                    as="textarea" 
                    rows={4} 
                    placeholder = "Give a description here"
                    value={newTaskDes}
                    onChange={e => setNewTaskDes(e.target.value)}/>
                </Form.Group>       
                <Button variant="primary" onClick = {handleAddTask}>
                    Add
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        </div>
    )
}


