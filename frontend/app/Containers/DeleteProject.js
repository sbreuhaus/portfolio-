import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import DeleteProjectUI from '../stateless/DeleteProjectUI';

const DeleteProject = React.createClass({
  getInitialState () {
    return {
      allProjects: []
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
  render (){
    return (
      <DeleteProjectUI allProjects={this.state.allProjects} />
    )
  }
});

export default DeleteProject;
