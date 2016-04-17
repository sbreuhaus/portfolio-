import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import ProjectUI from '../Components/ProjectUI';

const Project = React.createClass({
  getInitialState(){
    return {

    }
  },
  componentDidMount(){
    console.log('project page.')
  },
  render(){
    return (
      <div>
        <ProjectUI />
      </div>
    );
  }
})

export default Project;
