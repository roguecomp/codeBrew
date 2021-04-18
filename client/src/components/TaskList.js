import React, {useState, useEffect,useRef, createRef} from 'react'
import Badge from 'react-bootstrap/Badge'
import {dragStart} from './Dnd'
import ReactDOM from 'react-dom';
import firebase from './Firebase'
function TaskList(){
    //const dummy_tasks = ['task1', 'task2', 'task3', 'task4', 'task5']
    const [tasks, setTasks] = useState([])
    const projectId = 'project111231414';
    useEffect(() => {
        const tasksRef = firebase.database().ref('projects/' + projectId   + "/task");
        tasksRef.on('value', (snapshot) => {
          const tasks = snapshot.val();
          const tasksList = [];
          for (let _id in tasks) {
            tasksList.push({ id : _id, ...tasks[_id] });
          }
          console.log(tasksList)
          setTasks(tasksList);
        });
    }, [])

    // Drag and Drop Functions

    //Events fired on the drag target
    const taskRefs = useRef([]);
    taskRefs.current = tasks.map(
        (ref, index) =>   taskRefs.current[index] = createRef()
    )

    useEffect (()=>{
        const toRemove = []
        taskRefs.current.map((ref, index)=>{

            
            try{
                if (ref.current){
                    ref.current.addEventListener("dragstart", dragStart, false);
                    console.log(ref.current)
                    toRemove.push(()=>{
                        ref.current.removeEventListener("dragstart", dragStart, false);
                    })
    
                }

            }catch(err){
                console.log("ref.current is null", err)
            }
            
            
        })
        return (
            () => {toRemove.map((removefunc,index) =>{removefunc()})}
            
        )


    }, [ tasks])



    
    return (
        <>
        <div className = 'timer-card-header-text'>Task List</div>
        <div className ="task-board">
            {tasks.map((task, index)=>{
               return  (
                   <div key = {index} draggable="true" className='draggable' ref={taskRefs.current[index]}>
                       <Badge style = {{fontSize:'90%'}} variant="primary" className ="task-badge">{task.name}</Badge>

                   </div>
               )
            })}

        </div>
        </>
    )
}

export default TaskList;