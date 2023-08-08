function Note(props){
    const handlePersist = (e) => {
        e.preventDefault();
        if (Object.keys(props.data).length === 0){
            alert("There is no template loaded.");
            return;
        }
        const template = {
            "diagnosis": props.data.diagnosis,
            "symptoms": props.data.symptoms,
            "medTreat": props.data.medTreat,
            "plan": props.data.plan
        };

        const response = fetch('https://soapscribetemplates-mxexbe64sq-uc.a.run.app/api/v1/create', {
          method: 'POST',
          body: JSON.stringify(template),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            response.json()
            .then((res) => {
                if (res.completed){alert("Successfully saved");}
                // console.log(res);
            })
            .catch((e) => {
                alert("Error in saving template")
            })
        })
        .catch((e) => {
            alert("Error saving");
            console.log(e);
        })
    }
    
    return(
    <div class="container" id="content-hold">
        <h5>Subjective and Plan for {props.data.diagnosis}</h5>
        <p>HPI:<br></br>
        Patient was seen for {props.data.diagnosis}.<br></br>
        Symptoms began ___ days ago. Patient is not taking any medication for the {props.data.diagnosis}.     
        Patient experiences {props.data.symptoms}.</p>
        <p>Plan:<br></br>
        Pt was educated on {props.data.diagnosis} and treatment options.<br></br>
            Treatment was discussed as followed:<br></br>
            {props.data.medTreat}
            <br></br>
        </p>
        <p>
        Prevention was discussed as followed:<br></br>
        {props.data.plan}
        </p>
        <button onClick={handlePersist} id="btn" class="btn btn-primary btn-lg btn-block">Save Template</button>
    </div>
    )
}

export default Note