import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import EditProjectUI from '../stateless/EditProjectUI';

const EditProject = React.createClass({
  getInitialState () {
    return {
      allProjects: [],
      projectIDToEdit: '',
      oldID: '',
      newTitle: '',
      newThumbnail: '',
      newSkills:''
    }
  },
  // populate form with correct project
  handleAutoFill(e){
    //setting old id to edit
    this.setState({
      oldID: e.target.value
    });
    //Ajax call to find particular project
    helpers.projects.findProject(e.target.value)
    .then(response=>{
      console.log('response from finding a project is', response.data);
      //Setting the new states
      this.setState({
        newTitle: response.data['0'].title,
        newThumbnail: response.data['0'].thumbnail,
        newSkills: response.data['0'].skills
      });
    });
  },
  componentDidMount(){
    helpers.projects.getProjects()
    .then(function(res){
      this.setState({
        allProjects: res.data
      });
    }.bind(this));
  },
  handleEditProject (){
    //splitting skills
    let skillsArray = this.state.newSkills;
    // checking if skills is a string or array to properly store it in new object as an array
    if(typeof this.state.newSKills==='string'){
      skillsArray = skillsArray.split(" ");
    }
    // creating object to insert to db
    const projectToAdd = {
      oldID: this.state.oldID,
      title: this.state.newTitle,
      thumbnail: this.state.newThumbnail,
      skills: skillsArray
    };
    console.log('project to add is ', projectToAdd);
    // inserting obj in db
    helpers.projects.updateProject(projectToAdd);
  },
  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  },
  render (){
    return (
      <EditProjectUI allProjects={this.state.allProjects}
      onAutoFill={this.handleAutoFill}
      onInput={this.handleInput}
      newTitle={this.state.newTitle}
      newThumbnail={this.state.newThumbnail}
      newSkills={this.state.newSkills}
      onEditProject={this.handleEditProject}
      />
    )
  }
});

export default EditProject;
