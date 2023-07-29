function Note(props){
    return(
    <div class="container" id="content-hold">
        <h5>Subjective and Plan for {props.diagnosis}</h5>
        <p>HPI:<br></br>
        Patient was seen for {props.diagnosis}.<br></br>
        Symptoms began ___ days ago. Patient is not taking any medication for the {props.diagnosis}.     
        Patient experiences {props.symptoms}.</p>
        <p>Plan:<br></br>
        Pt was educated on {props.diagnosis} and treatment options.<br></br>
            Treatment was discussed as followed:<br></br>
            {props.medTreat}
            <br></br>
        </p>
        <p>
        Prevention was discussed as followed:<br></br>
        {props.plan}
        </p>
    </div>
    )
}

export default Note