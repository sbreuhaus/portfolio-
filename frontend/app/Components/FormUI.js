import React from 'react';

const FormUI = React.createClass({
  render (){
    return (
      <div className='navigator'>
        <h1>navigator</h1><br/>
        <input type='text' placeholder='Name' name='logoName'></input><br/>
        <input type='text' placeholder='LinkedIn' name='linkedIn'></input><br/>
        <input type='text' placeholder='Github' name='github'></input><br/>
        <button type='button'>Create</button><br/>
        <button type='button'>Edit</button><br/>
        <button type='button'>Delete</button>
      </div>

    );
  }
})

export default FormUI;
