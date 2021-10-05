import React from 'react'
import { render } from 'react-dom';
// THis is a form element that takes the users given code
class UserCode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {code_text: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
        
      }
      handleChange(event) {    this.setState({code_text: event.target.code_text});  }
      handleSubmit(event) {
       /// alert('code' + this.state.code_text);
        event.preventDefault();
      }
      
    
      render() {
        
        return   (
        <>
        <form onSubmit={this.handleSubmit}>       
         <label>
          Your code here: 
          <textarea value={this.state.code_text} onChange={this.handleChange} />
          </label>
    <input type="submit" code_text="" value = "submit" />
      </form>
        </> 
      )




  
      } 
      


    }
  //end class

export default UserCode;