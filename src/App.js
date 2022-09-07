//import React from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App= () => {
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

  return (
    <div className="container">
      <Header title='Task Tracker' />
      { 
        tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask}/> : 'No Tasks available'
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
