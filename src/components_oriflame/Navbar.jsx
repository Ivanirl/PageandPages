//import { useState} from "react"

export default function Navbar({toint, menuha, onyx, setMenuha}){
    //const [menuha, setMenuha] = useState(false)

    return(
        <div className="Navbar">
            <div className="container">
                <button className={menuha? "left": "rite"} onClick={onyx}></button>
                <div className="right">
                    <span className={menuha? " ": "blue"}>{toint}</span>
                </div>
            </div>
        </div>
    )
}