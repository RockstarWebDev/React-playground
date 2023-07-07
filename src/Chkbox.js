import { useState } from "react";


export default function Chkbox() {
    const [liked, setLiked] = useState(true);


    function handleChecked(){
        setLiked(!liked);
    }

    return(
        <div>
            <input type="checkbox" name="liked" onChange={handleChecked} value={liked} /> I liked this
            <lable>
                <p>You {liked ? "liked": "disliked"} this. </p>
            </lable>
        </div>
    )
}