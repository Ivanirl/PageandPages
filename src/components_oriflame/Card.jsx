export default function Card(props){
    fetch(
        "./src/pages/Data.json"
    ).then(response => {
        return response.json()
    }).then( data => {

    })


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