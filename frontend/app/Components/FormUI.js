import React from 'react';

const FormUI = React.createClass({
  render(){
    return (
      <div className='navigator'>
        <h3>user data</h3>
        <input
          type='text'
          placeholder='Name'
          className='userInput'
          name='logoName'
          value={this.props.logoProps}
          onChange={this.props.onInput}></input><br/>
        <input
          type='text'
          placeholder='LinkedIn'
          className='userInput'
          value={this.props.linkedInProps}
          name='linkedIn'
          onChange={this.props.onInput}></input><br/>
        <input
          type='text'
          placeholder='Github'
          className='userInput'
          value={this.props.githubProps}
          name='github'
          onChange={this.props.onInput}></input><br/>

        <button type='button' name='create' onClick={this.props.onAjaxCall}>Create</button><br/>
        <button type='button' name='update' onClick={this.props.onAjaxCall}>Edit</button><br/>
        <button type='button' name='delete' onClick={this.props.onAjaxCall}>Delete</button><br/><br/>

        <hr/>
        <h3>project</h3>
        <p>Add, edit or delete a project:</p>
        <select onChange={this.props.onProjectChoice}>
          <option disable > -- select an option -- </option>
          <option type="radio" name='project' value="addProject">Add Project </option>
          <option type="radio" name='project' value="editProject">Edit Project </option>
          <option type="radio" name='project' value="deleteProject">Delete Project</option>
        </select>
        {this.props.onProject()}
      </div>

    );
  }
})

export default FormUI;
