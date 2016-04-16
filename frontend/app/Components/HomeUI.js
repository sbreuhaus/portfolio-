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
          {this.props.skills.map(
            function(skill, index){
              return (
                <li className='skillItem' key={index}>{skill}</li>
                )
            }
          )}
        </ul>
        <div className='projectsDisplay'>
          {this.props.projects.map(
            function(project, index, skills) {
              console.log(project.skills);
              return (
                <div className='projectItem' key={index}>
                  <img className='projectImg' src={project.thumbnail}></img>
                  <div className='projectTitle'>{project.title}</div>
                  <div className='projSkills'>{project.skills}
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    );
  }
});

export default HomeUI;
