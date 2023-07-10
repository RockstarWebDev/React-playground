import { useReducer } from "react";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";


function taskReducer(tasks, action) {
    switch (action.type) {
      case "Added": {
        return [
          ...tasks,
          { id: action.id, 
           text: action.text,
           done:false}
        ];
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}



  export default function TaskApp(){

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddTask(text) {
      dispatch({
        type: 'Added',
        id: nextID++,
        text: text,
      });
    }

    return(
      <div>
      <h1>Todo List with useReducer</h1>
      <TaskAdd onAddTask={handleAddTask}/>
      <TaskList tasks={tasks}/>
      </div>
    )
  }
  
let nextID = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
  ];