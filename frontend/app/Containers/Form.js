import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import FormUI from '../Components/FormUI';

const Form = React.createClass({
  getInitialState(){
    return {
      logoName: '',
      linkedin: '',
      github: '',
      newName: '',
      newLinkedin: '',
      newGithub: ''
    }
  },
  handleInput(e){
    console.log(e.target.value);
    console.log(e.nativeEvent);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.logoName);
  },
  handleSubmitUser(e){
    console.log(this.state.logoName);
    // ajaxHelpers.users.addUser(user)
    // .then(function(response){
    //   //post request
    //   console.log(resposne)
    // });
  },
  render (){
    return (
      <FormUI onInput={this.handleInput} />
    )
  }
})

export default Form;
