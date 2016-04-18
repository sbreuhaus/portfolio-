import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import ProjectUI from '../Components/ProjectUI';
import {Link} from 'react-router';

const Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      getTitle: '',
      getDesc: '',
      getImg: '',
      getLink: '',
    }
  },
  componentWillMount(){
    console.log('component will mount');
  },
  componentDidMount(){
    console.log('project page.')
  },
  render(){
    return (
      <div>
        <ProjectUI
          getTitle={this.state.getTitle}
          getDesc={this.state.getDesc}
          getImg={this.state.getImg}
          getLink={this.state.getLink}
          />
      </div>
    );
  }
})

export default Project;
