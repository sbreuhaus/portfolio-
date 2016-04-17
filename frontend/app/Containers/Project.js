import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import ProjectUI from '../Components/ProjectUI';

const Project = React.createClass({
  getInitialState(){
    return {
      getTitle: '',
      getDesc: '',
      getImg: '',
      getLink: ''
    }
  },
  componentWillMount(){
    const query = this.props.location.query;
    console.log(query);
    this.setState({
      getTitle: query.sendTitle,
      getDesc: query.sendDesc,
      getImg: query.sendImg,
      getLink: query.sendLink
    })
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
