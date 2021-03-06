import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FrameDelta from "./FrameDelta"
import my_element from "./my_element"
import UserCode from './UserCode'
import CodeOutput from './CodeOutput';
class  App extends React.Component{



  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.move = this.move.bind(this);
    ///this.handleSubmitCode = this.handleSubmitCode(this)
    
    this.state = {user_input: '', 
                  current_frame: 0,
                user_file: null };
  }
  
  onFileChange = event => {
    
    // Update the state
    this.setState({ user_file: event.target.files[0] });
  
  };
  handleSubmit(e) {
    this.setState({user_input: e.target.value});
  
    e.preventDefault();}
    updateCount(e){
      this.setState({current_frame: this.state.current_frame+1})
    }
    handleSubmitCode(event) { this.setState({user_input: event.target.user_input})
    alert("submitting:   "+ this.state.user_input);
     event.preventDefault(); }

    handleChange(e) { this.setState({current_frame :  e.current_frame});  }
    move  (text) {
      //alert(text)
      if(text ==="Forward"){
        
        this.setState({current_frame: this.state.current_frame+1});
        //this.setState({ name: "Forward" }); 
        alert("Step forward: Frame no:  " + this.state.current_frame);
        //alert(text === "Backward" && this.state.count > 0)

      }
      else if (text === "Backward" && this.state.current_frame > 0){
        
        this.setState({current_frame: this.state.current_frame-1});
        //this.setState({ name: "Backward" }); 
        alert("Step back: Frame no:  " + this.state.current_frame);
        
  
        ///requests.get('http://localhost:3000/whyline')
        
      }
      else{
        alert("at beginning of program")
      }
    } ; 
   
    

    
  render(){
 
  return (
    
    <>
    <div class="header">
    <h> Python Whyline</h>
    </div> 
  
    
    <div class="grid-container">
   
   
      <div class="right"  >
      <FrameDelta frame1 id={"Forward"} count = {this.state.current_frame} move = {this.move.bind(this)} /> 
      </div>
      <div class="middle"  >
      <UserCode user_code   /> </div>
      //////<CodeOutput c />
      
      
      <div class="left"  >
      <FrameDelta frame2 id={"Backward"} count = {this.state.current_frame}  move = {this.move.bind(this)}  /> 
      
        
      
      </div>
      <div class = "footer">
      <div class="slidecontainer">
  
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> 
  </input>
  

        </div>
     
     
   
      </div>
    
    
</div></>
  ); 
  
}
}
export default App