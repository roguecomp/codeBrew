function dragStart(event) {
    console.log(event.target.children[0].innerHTML)
    event.dataTransfer.setData("text", event.target.children[0].innerHTML); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
    
}

//Events fired on the drop target

function dragEnter(event) {
     
    event.target.classList.add("droppable-hover");
    
}

function dragOver(event) {
    // if(!event.target.classList.contains("dropped")) {
    // event.preventDefault(); // Prevent default to allow drop
    // }
    event.preventDefault(); // Prevent default to allow drop
    //console.log(event.target)
}

function dragLeave(event) {
    // if(!event.target.classList.contains("dropped")) {
    // event.target.classList.remove("droppable-hover");
    // }
    event.target.classList.remove("droppable-hover");
    
}

function drop(event,setTask) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    
    const draggableElementData = event.dataTransfer.getData("text");
    console.log(draggableElementData)
    setTask(draggableElementData)
}

export {dragStart,dragEnter,dragOver,dragLeave}