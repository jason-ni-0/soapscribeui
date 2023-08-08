import ReactSearchBox from "react-search-box";
import { useState } from 'react';
import axios from "axios";

function SearchBar(props){
  const [options, setOptions] = useState([])

  function handleQuery(val) {
    if (!val){ return; }
    let promise = new Promise(function(resolve, reject) {
      axios.get(`https://soapscribetemplates-mxexbe64sq-uc.a.run.app/api/v1/query`, { params: {diagnosis: val}})
      .then(res => {
        console.log(res.data)
        setOptions(res.data['suggestions']);
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
  }

  function handleSearch(val) {
    if (!val.item.value){ return; }
    let promise = new Promise(function(resolve, reject) {
      axios.get(`https://soapscribetemplates-mxexbe64sq-uc.a.run.app/api/v1/retrievetemplate`, { params: {diagnosis: val.item.value}})
      .then(res => {
        console.log(res.data);
        props.setData(res.data);
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
  }

  return (
    <div style={{'height': 50, 'width': 300}}>
    <ReactSearchBox
      placeholder="Search Existing Diagnosis"
      data={options}
      onSelect={(record) => handleSearch(record)}
      onFocus={() => {}}
      onChange={(value) => handleQuery(value)}
      autoFocus
    />
    </div>
  )
}

export default SearchBar