

function PersonCard(props){
    return(
        <div>
            <div className="peopleCard">
                <img style={{borderRadius:"50%", width:"150px", height:"150px", margin:"0 auto 0 auto", objectFit:"cover"}} src={props.image}/>
                <p>{props.name}</p>
                <p><i>{props.title}</i></p>
                <p style={{fontSize:"14px"}}>{props.description}</p>
                <a href={"https://" + props.personalsite} style={{fontSize:"15px", color:"white"}}><i>{props.personalsite}</i></a>
            </div>
        </div>
    )
}

export default PersonCard 