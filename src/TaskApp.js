
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
      }case "Changed": { 
           return tasks.map(t=>{
            if(t.id === action.task.id){
              return action.task;
            }else{
              return t;
            }
           })
      }case "Deleted": {
        return tasks.filter(t=>t.id !== action.id);
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

   function handleChangeTask(task) {
    dispatch({ type: 'Changed', task:task });
   }

   function handleDeleteTask(taskId) {
    dispatch({ type: 'Deleted', id:taskId });
   }

    return(
      <div>
      <h1>Todo List with useReducer</h1>
      <TaskAdd onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
      </div>
    )
  }
  
let nextID = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
  ];