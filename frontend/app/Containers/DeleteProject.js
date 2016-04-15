import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import DeleteProjectUI from '../stateless/DeleteProjectUI';

const DeleteProject = React.createClass({
  getInitialState () {
    return {
      allProjects: [],
      projectID: ''
    }
  },
  componentDidMount(){
    helpers.projects.getProjects()
    .then(function(res){
      this.setState({
        allProjects: res.data
      });
    }.bind(this));
  },
  handleDeleteProject(){
    helpers.projects.deleteProject(this.state.projectID);
  },
  handleAutoFill(e){
    //setting old id to edit
    this.setState({
      projectID: e.target.value
    });
  },
  render (){
    return (
      <DeleteProjectUI
        allProjects={this.state.allProjects}
        onDeleteProject={this.handleDeleteProject}
        onAutoFill={this.handleAutoFill}
      />
    )
  }
});

export default DeleteProject;
