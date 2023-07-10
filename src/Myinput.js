import { useState } from "react";


export default function Myinput(){

    const [text, setText] = useState("hello");

  function handleText(e){
        setText(e.target.value);
        console.log(e);
    }
 

    return(
        <div>
            <input id="test" className="Testclass" type="text" value={text} onChange={handleText} />
            <p>You typed {text}</p>
            <button onClick={() => setText('hello')}> Reset </button>
        </div>
    );
}