import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditable, SetEditable] = useState(false);
  let templateState;

  if (isEditable) {
    templateState = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => onChange({ ...task, text: e.target.value })}
        />
        <button onClick={() => SetEditable(false)}>Save</button>
      </>
    );
  } else {
    templateState = (
      <>
        {task.text}
        <button onClick={() => SetEditable(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {templateState}
        <button
          type="button"
          onClick={() => {
            onDelete(task.id);
          }}
        >
          Delete
        </button>
      </label>
    </>
  );
}
