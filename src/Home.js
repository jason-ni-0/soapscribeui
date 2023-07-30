import { React, useState } from "react"
import NavBar from "./NavBar"
import axios from "axios"
import Note from "./Note"
// import { InfinitySpin } from 'react-loader-spinner'
// import LoadingOverlay from "react-loading-overlay";

function Home(){
    const [diagInput, updateInput] = useState("");
    const [data, setData] = useState({});
    // const [loading, setLoading] = useState(false);

    function handleStart(){
        // setLoading(true);
        if (!diagInput){ alert("Diagnosis cannot be empty"); return;}
        let promise = new Promise(function(resolve, reject) {
          axios.get(`https://soapscribe-mxexbe64sq-uk.a.run.app/api/v1/generate`, { params: {diagnosis: diagInput}})
          .then(res => {
            console.log(res.data)
            setData(res.data);
            })
            .catch(function(error) {
              console.log(error);
          });
        });
        promise.then(function(response) {
        if(response){
          //console.log(response);
        }
      }, function(error){
        alert("Enter valid diagnosis")
      } );
    //   setLoading(false)
      }

    return(
        <div>
            <NavBar></NavBar>
            {/*<LoadingOverlay class="loadingOverlay" spinner={<InfinitySpin color="#aa00ff"
            ariaLabel="three-dots-loading" />} styles={{
            overlay: base => ({
                ...base,
                background: "rgba(255, 255, 255, 0.9)"
            }),
            content: base => ({
                ...base,
                marginTop: props.marginTop
            })
            }} active={loading}>*/}
                <div class="container" id="content-hold">
                    <div class="form-group mb-2">
                        <h3>Enter diagnosis to get SOAP note template:</h3>
                    </div>
                    <div class="form-group mb-2">        
                    <input type="text" class="form-control" onChange={e => updateInput(e.target.value)} placeholder="Ex. common cold, flu" required></input>
                    </div>
                    <button onClick={handleStart} id="btn" class="btn btn-primary btn-lg btn-block">Enter</button>
                </div>
            {data['diagnosis']? <Note diagnosis={data['diagnosis']}
            symptoms={data['symptoms']} medTreat={data['medTreat']} plan={data['plan']}></Note> : null}
            {/* </LoadingOverlay> */}
        </div>
    )
}

export default Home