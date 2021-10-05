import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FrameDelta from "./FrameDelta"
import my_element from "./my_element"
import UserCode from './UserCode'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  ///this.handleChange = this.handleChange.bind(this);
  return (
    <>
    
    <div class="header">
    <h> Python Whyline</h>
    </div> 
  
    
    <div class="grid-container">
   
    
   
      <div class="left"  >
      <FrameDelta frame1 id={"Forward"} /> 
      </div>
      <div class="middle"  >
      <UserCode user_code handleChange={this.handleChange} /></div>
      
      
      <div class="right"  >
      <FrameDelta frame2 id={"Backward"} /> 
      
        
      
      </div>
      <div class = "footer">frame_data here</div>
    
</div></>
  );
}
export default App