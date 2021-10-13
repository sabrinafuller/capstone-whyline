import React, { useEffect, useState } from 'react'
import axios from 'axios'
///import React, { useEffect, useState } from 'react';

class FrameDelta extends React.Component {
  //const [getMessage, setGetMessage]; // = useState({});
    constructor(props) {
      
      
      super(props);
      //this.name.bind("name")
      
        this.state = {  
          name: props.name,
          id : props.id,
          data:  "",
          count: props.count,
         // move: props.move

        };
        //this.move =  this.move.bind(this);
        //props.move = this.move.bind(this)
      }
      
        // Include the api call
        //this.handleClick = this.handleClick.bind(this);
        //const [getMessage, setGetMessage]= useState({})
       
      handleClickForward = () => {  
        alert("messages")  
        this.setState({name : "Next Frame"})
        }


      
    
      handleChange(event) { this.setState({name: "first"})
       alert("moving forward   "+ this.state.count);
        event.preventDefault(); }
        
        
          
        
        
      
    render() {
      
      return   (<>
      
      <button onClick={ () => { this.props.move(this.state.id)}  }>
      Move {this.state.id}
    </button> 
    
        
    </>)

    }
  }


export default FrameDelta; 