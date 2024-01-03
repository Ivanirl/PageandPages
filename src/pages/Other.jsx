import Card from "../components_oriflame/Card"


export default function Ori (){
    fetch(
        "./src/pages/Data.json"
    ).then(response => {
        return response.json()
    }).then( data => {

    })

    return(
        <div className="container">
            <Card key={data.id} attack={data.attack} defense={data.defense} />
        </div>
    )
}