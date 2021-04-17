import React, {useState, useEffect, createRef} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Button from 'react-bootstrap/Button'
import  {dragEnter,dragOver,dragLeave} from './Dnd'
import Arrow from '../asserts/Arrow.svg'

function TimeDisplay(){
    const [totalTime, setTotalTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [key, setKey] = useState(0);
    const [currentTask, setCurrentTask] = useState("")
    const [ringCompleted, setRingCompleted] = useState(false)
    const total_time = 5;


    // drop event listener 
    const dropRef = createRef()

    function drop(event) {
        event.preventDefault();
        event.target.classList.remove("droppable-hover");
        
        const draggableElementData = event.dataTransfer.getData("text");
        console.log(draggableElementData)
        setCurrentTask(draggableElementData)
    }
    
    useEffect(()=>{
    
        dropRef.current.addEventListener("dragleave", dragLeave, false)
        dropRef.current.addEventListener("dragover", dragOver, false)
        dropRef.current.addEventListener("dragenter", dragEnter, false)
        dropRef.current.addEventListener("drop", drop, false)
        return (
            ()=>{
                dropRef.current && dropRef.current.removeEventListener("dragleave", dragLeave, false)
                dropRef.current && dropRef.current.removeEventListener("dragover", dragOver, false)
                dropRef.current && dropRef.current.removeEventListener("dragenter", dragEnter, false)
                dropRef.current && dropRef.current.removeEventListener("drop", drop, false)

            }
        )

    }, [])

    
    //  This use Effect update the time 
  useEffect( () => {
    if (isRunning) {
      console.log('working')
      const timer = setTimeout( () => {
        var newSeconds = totalTime + 1; 
        setTotalTimer(newSeconds);
        
      }, 1000)
  
      return ( () => clearTimeout(timer))

    }
  }, 
  )
    const pad_zero = (num) =>{
        if (num < 10){
            return `0${num}`
        }else{
            return num
        }
    }
    const children = ({ remainingTime }) => {
        const hours = pad_zero(Math.floor(totalTime / 3600))
        const minutes = pad_zero(Math.floor((totalTime % 3600) / 60))
        const seconds = pad_zero(totalTime % 60)
   
        return (
            <div className="timer-text">
            <div className="text">Elapsed Time </div>
            <div className="value"> {hours}:{minutes}:{seconds}</div>
        
            </div>
        )

      }
    
    function onComplete(totalElapsedTime){
        setRingCompleted(true)
        return ([true,0])
    }

    function stopTimer(){
        setIsRunning(false)
        // log data to the database 
        console.log(totalTime)
        // clear totalTime 
        setTotalTimer(0)
        setKey(prevKey => prevKey + 1)
        setRingCompleted(false)


    }
    
    return (
        <>
        <div className="timer-col">
        <div className = 'timer-card-header-text'>I'm doing...</div>
        <div className = 'sudo-arrow-wrapper'>
            <div className = 'arrow-wrapper'>
                <div style = {{fontSize :'1vw'}}>drag a task </div>
                <img src = {Arrow} /></div>
        </div>
        
        <div className = 'task-bar droppable' ref = {dropRef} 
        > {currentTask == "" ? 'put your task here':currentTask}
        
        </div>
        <div className= 'timer-wrapper'>
        <CountdownCircleTimer
            key={key}
            size = {220}
            trailColor = {ringCompleted ? '#FFCECE' : '#d9d9d9'}
            isPlaying = {isRunning}
            duration={total_time}
            strokeWidth = {27}
            isLinearGradient
            colors={[
            ['#FF9C9C', 0.5],
            ['#FFAEAE', 0.5]
            ]}
            onComplete={() => onComplete()}
            
            
        >
            { children}
        </CountdownCircleTimer>
         

        

        </div>
        {isRunning? <Button variant="light"
                className = 'end-timer'
                onClick= {()=>{stopTimer()}}>End working</Button>: 
                <Button style = {{background:"#6C63FF" ,borderColor:"#6C63FF" }} 
                className = 'start-timer'
                onClick= {()=>{setIsRunning(true)}}>Start working</Button>} 
        
        </div>
        </>
    )
}

export default TimeDisplay;