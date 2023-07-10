import { useState } from "react";

export default function TaskAdd({onAddTask}){

    const [text, setText] = useState('');
console.log(text);


return(<div>
    <input type="text" placeholder="add task" value={text} onChange={e=>setText(e.target.value) }/>
    <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
</div>)
}