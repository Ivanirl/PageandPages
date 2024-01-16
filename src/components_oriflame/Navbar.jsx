import { useState,} from "react"

export default function Navbar(){
    const [menuha, setMenuha] = useState(false)

    return(
        <div className="Navbar">
            <div className="container">
                <button className={menuha? "left": "rite"} onClick={()=>{setMenuha(!menuha)}}></button>
                <div className="right">
                    <span className={menuha? " ": "blue"}>ORDER ONLINE</span>
                </div>
            </div>
        </div>
    )
}