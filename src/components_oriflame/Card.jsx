export default function Card(){
    fetch(
        "./src/pages/Data.json"
    )



    return(
        <div className="Card">
            <div className="container">
                <img />
                <div className="Main">
                    <div className="left">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="rite">
                        <span></span>
                    </div>
                </div>
                <div className="details">
                    <div className="left"></div>
                    <div className="rite"></div>
                </div>
            </div>
        </div>
    )
}