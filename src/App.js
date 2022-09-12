//import React from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App= () => {
  const [showAddTask. setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at school",
    day: "Feb 6th at 8:00am",
    reminder: true,
  },
  {
    id: 3,
    text: "Water Plant",
    day: "Feb 8th at 4:30pm",
    reminder: false,
  },
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header title='Task Tracker' />
      { showAddTask && <AddTask onAdd={addTask} />}
      { 
        tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks available'
      }
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>hello from react class</h1>
//   }
// }

export default App;
