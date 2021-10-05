import React, { useEffect, useState } from 'react'
import axios from 'axios'
///import React, { useEffect, useState } from 'react';

class FrameDelta extends React.Component {
  //const [getMessage, setGetMessage]; // = useState({});
    constructor(props) {
      
      
      super(props);
      //this.name.bind("name")
        this.state = {  
          name: "first name",
          id : props.id,
          data:  "defualt"

        };
      }
      
        // Include the api call
        //this.handleClick = this.handleClick.bind(this);
        //const [getMessage, setGetMessage]= useState({})
        useEffect = ()=>{
          
          axios.get('http://localhost:5000/flask/hello').then(response => {
            console.log("SUCCESS", response)
            const d = response.data.total
            this.setState({data:d})
            
            
          }).catch(error => {
            console.log(error)
          }
          )
        
        };
      handleClickForward = () => {  
        alert("messages")  
        this.setState({name : "Next Frame"})
        }

        move = (text) => {
          //alert(text)
          if(text ==="Forward"){
            alert("Step forward")
            this.setState({ name: "Step Forward" }); 

          }
          else{
            alert("Step back")
            this.useEffect()
            alert(this.data)
            
      
            ///requests.get('http://localhost:3000/whyline')
            this.setState({ name: "Step Backwards" }); 
          }
          
        } 
      
    render() {
      
      return   (<>
      
      <button onClick={ () => { this.move(this.state.id)}  }>
       move {this.id}
    </button> 
    {this.data}
        
    </>)

    }
  }


export default FrameDelta; 