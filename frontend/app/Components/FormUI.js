import React from 'react';

const FormUI = React.createClass({
  render(){
    return (
      <div className='navigator'>
        <h3>navigator</h3><br/>
        <input
          type='text'
          placeholder='Name'
          name='logoName'
          value={this.props.logoProps}
          onChange={this.props.onInput}></input><br/>
        <input
          type='text'
          placeholder='LinkedIn'
          value={this.props.linkedInProps}
          name='linkedIn'
          onChange={this.props.onInput}></input><br/>
        <input
          type='text'
          placeholder='Github'
          value={this.props.githubProps}
          name='github'
          onChange={this.props.onInput}></input><br/>

        <button type='button' name='create' onClick={this.props.onAjaxCall}>Create</button><br/>
        <button type='button' name='update' onClick={this.props.onAjaxCall}>Edit</button><br/>
        <button type='button' name='delete' onClick={this.props.onAjaxCall}>Delete</button><br/><br/>

        <hr/>
        <h3>Project</h3>
        <p>please choose among the following:</p>
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
