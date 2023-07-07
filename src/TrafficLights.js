import { useState } from "react";

 function TrafficLights() {

    const [walk, setWalk] = useState(true);

    const handleWalk=()=>{
        setWalk(!walk);
    }

    return(
        <div>
            <button onClick={handleWalk}>change trafic light</button>
            <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}> {walk ? 'Walk' : 'Stop'}</h1>
        </div>
    );

}

export default TrafficLights;