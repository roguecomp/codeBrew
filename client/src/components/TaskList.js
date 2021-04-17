import React, {useState, useEffect,useRef, createRef} from 'react'
import Badge from 'react-bootstrap/Badge'
import {dragStart} from './Dnd'
import ReactDOM from 'react-dom';
function TaskList(){
    const dummy_tasks = ['task1', 'task2', 'task3', 'task4', 'task5']

    // Drag and Drop Functions

    //Events fired on the drag target
    const taskRefs = useRef([]);
    taskRefs.current = dummy_tasks.map(
        (ref, index) =>   taskRefs.current[index] = createRef()
    )

    useEffect (()=>{
        const toRemove = []
        taskRefs.current.map((ref, index)=>{

            ref.current.addEventListener("dragstart", dragStart, false);
            if (ref.current){
                toRemove.push(()=>{
                    ref.current.removeEventListener("dragstart", dragStart, false);
                })

            }
            
        })
        return (
            () => {toRemove.map((removefunc,index) =>{removefunc()})}
            
        )


    }, [])



    
    return (
        <>
        <div className = 'timer-card-header-text'>Task List</div>
        <div className ="task-board">
            {dummy_tasks.map((task, index)=>{
               return  (
                   <div key = {index} draggable="true" className='draggable' ref={taskRefs.current[index]}>
                       <Badge style = {{fontSize:'90%'}} variant="primary" className ="task-badge">{task}</Badge>

                   </div>
               )
            })}

        </div>
        </>
    )
}

export default TaskList;