import React from 'react';

var listSkill = function(skill, index) {
  return <li key={index}>{skill}</li>;
};

var listProject = function(project, index) {
  return <div className='projectItem' key={index}><img src={project.thumbnail}></img><div className='projectTitle'>{project.title}</div></div>
};

var navStyle = {
  display: 'inlineBlock'
}

const HomeUI = React.createClass({
  render (){
    return (
      <div className='contentDisplay'>
        <div style={navStyle} className='navigatorDisplay'>
          <div className='nameDisplay'>{this.props.logoProps}</div>
          <a className='linkedinDisplay' href={this.props.linkedInProps}>LinkedIn</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='githubDisplay' href={this.props.githubProps}>Github</a>
        </div>
        <ul className='skillList'>
          {this.props.skills.map(listSkill)}
        </ul>
        <div className='projectsDisplay'>
          {this.props.projects.map(listProject)}
        </div>
      </div>
    );
  }
});

export default HomeUI;
