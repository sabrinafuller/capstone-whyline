// this class formats the code output so that the user can see what they uploaded and scroll through it

import React, { useEffect, useState } from 'react'
import axios from 'axios'
///import React, { useEffect, useState } from 'react';
//code.split("\n"),
class CodeOutput extends React.Component {
  //const [getMessage, setGetMessage]; // = useState({});
    constructor(props) {
            super(props);
      //this.name.bind("name")
      
        this.state = {  
            code: props.code,
            code_array: null,
            code_index: 0,

        };

    } 
// We can place this code slider to 
change_lines(direction){
    if(direction == "f"){
        this.setState({
            code_index: this.state.code_index + 1,
        })

    }
    else if (direction == "b" && this.state.code_index > 0) 
        this.setState({code_index: this.state.code_index - 1})

    }



render(){ 
    return(
    <>

    </> 
      )};  

    } 
      



export default CodeOutput;