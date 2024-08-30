import React, {useState}from "react"


function ToDoList(){
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState("");
const [selectedIndex, setSelectedIndex] = useState(null);

function handleInputChange(event){
    setNewTask(event.target.value);
}

function addTask(){
if(newTask.trim() !==""){
    setTasks(t=>[...t, newTask]);
    setNewTask("");
}
}

function deleteTask(index){
                              {/** _ to ignore a parameter */}
const updatedTasks = tasks.filter((_, i)=> i !== index);
setTasks(updatedTasks);
}

function updateTask(index) {
    const updatedTasks = [...tasks];
}

function moveTaskUp(index){
    {/** this method will swap tow element within an array  */}
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] =
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
}

function moveTaskDown(index){
    if(index < tasks.length -1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function handleKeyDown(event) {
    if (selectedIndex === null) return;

    const newTasks = [...tasks];

    if (event.key === "ArrowUp" && selectedIndex > 0) {
        [newTasks[selectedIndex], newTasks[selectedIndex - 1]] = [newTasks[selectedIndex - 1], newTasks[selectedIndex]]; // swap lart
        setSelectedIndex(selectedIndex - 1);
    } else if (event.key === "ArrowDown" && selectedIndex < tasks.length - 1) {
        [newTasks[selectedIndex], newTasks[selectedIndex + 1]] = [newTasks[selectedIndex + 1], newTasks[selectedIndex]]; // swap posht
        setSelectedIndex(selectedIndex + 1);
    }

    setTasks(newTasks);
}

return(
<div className="to-do-list" onKeyDown={handleKeyDown} tabIndex="0">
<h1> To-Do-List</h1>
<div>
    <input
        type="text"
        placeholder="Add Reminder"
        value={newTask}
        onChange={handleInputChange}/>

        <button className="add-button" onClick={addTask}>
        Add
        </button>

        <ol>
            {/* create a list item element for each task */}
            {tasks.map((task, index) =>(

        //    selecton rreshtin dhe me ane te shigjetave leviz lart dhe posht nepermjet funksionit handleKeyDown
                <li key={index}
                className={index === selectedIndex ? "selected" : ""} //if else  e perdor per te ndryshuar ngjyren e butonit te selektuar
                onClick={() => setSelectedIndex(index)}
                >

                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={()=> deleteTask(index)}>
                        Delete
                    </button>

                {/*  <button
                    className="move-button"
                    onClick={()=> moveTaskUp(index)}>
                        ⬆️
                    </button>

                    <button
                    className="move-button"
                    onClick={()=> moveTaskDown(index)}>
                        ⬇️
                    </button> */}
                </li>
            ))}
        </ol>
</div>
</div>);
}

export default ToDoList