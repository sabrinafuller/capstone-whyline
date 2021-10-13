import React from 'react'
import axios from 'axios'
import { render } from 'react-dom';
import Form from './Form'
// used code from https://www.geeksforgeeks.org/file-uploading-in-react-js/
// THis is a form element that takes the users given code
class UserCode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {code_text: ""};
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmitCode = props.handleSubmitCode.bind(this);
        
      }
      ///handleChange(event) {    this.setState({code_text: event.target.files[0]});  }
    
      onFileChange = event => {
    
        // Update the state
        this.setState({ code_text: event.target.files[0] });
      
      };
      handleFiles() {
        const fileList = this.file_input; /* now you can work with the file list */
      }
      onFileUpload = () => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          'file',
          this.state.code_text,
          
        );
          const t = "test data"
        console.log(this.state.code_text);
        // allow the user to upload the file on current system REMOVE THIS
        const h = {'Access-Control-Allow-Origin': 'http://localhost/api/uploadfile',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH', 
        'Access-Control-Allow-Credentials': 'True' };

      axios.post('http://localhost:5000/api/uploadfile', formData, {headers:h})
      .catch(error => console.log(error));
    

    
      alert("File Uploaded");



      } 
      fileData = () => {
    
        if (this.state.code_text) {
         
          return ([this.state.code_text]
      
          );

        } 
        else {
          return (
            <div>
              <br />
              <h4>Choose before Pressing the Upload button</h4>
            </div>
          );
        }

      };
    
      render() {
        
        return   (
        <>
    
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
              

        </> 
      )};  
      


}
  //end class

export default UserCode;