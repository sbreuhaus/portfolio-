import React from 'react';

var navStyle = {
  display: 'inlineBlock'
};

const HomeUI = React.createClass({
  render (){
    return (
      <div className='contentDisplay'>
        <div style={navStyle} className='navigatorDisplay'>
          <div className='nameDisplay'>{this.props.logoProps}</div>
          <a className='linkedinDisplay' href={this.props.linkedInProps}>Linkedin</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='githubDisplay' href={this.props.githubProps}>Github</a>
        </div>
        <ul className='skillList'>
          {this.props.skills.map(this.props.onListSkills)}
        </ul>
        <div className='projectsDisplay'>
          {this.props.projects.map(this.props.onListProjects)}
        </div>
      </div>
    );
  }
});

export default HomeUI;
