import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import HomeUI from '../Components/HomeUI';

var originalProjs;

const Home = React.createClass({
  getInitialState (){
    return {
      logoName: '',
      linkedIn: '',
      github: '',
      skills: [],
      projects: [],
      origProj: []
    }
  },
  componentDidMount(){
    helpers.users.getUsers().then(function(res){
      console.log("this is the res.data", res.data);
      if (res.data.length === 1) {
        console.log('got more than 1 in the database!');
        this.setState({
          logoName: res.data['0'].name,
          linkedIn: res.data['0'].linkedin,
          github: res.data['0'].github
        });
      console.log('initial state updated is: ', this.state.logoName);
      }
    }.bind(this))
    helpers.projects.getProjects().then(function(res){
      console.log('this is the project data', res.data);
      var skillsArray = [];
      for (var i = 0; i < res.data.length; i++) {
        for (var j = 0; j < res.data[i].skills.length; j++) {
          if (skillsArray.indexOf(res.data[i].skills[j]) === -1) {
            skillsArray.push(res.data[i].skills[j]);
          }
        }
      }
      console.log('the full set of skills is: ', skillsArray);
      this.setState({
        skills: skillsArray,
        projects: res.data,
        origProj: res.data
      });
      console.log('these are the skills: ', this.state.skills);
      console.log('these are the projects: ', this.state.projects);
      console.log('these are the skills in the projects: ', this.state.projects[0].skills);
    }.bind(this))
  },
  handleListSkills(skill, index) {
    return (
      <li className='skillItem' onClick={this.handleSkillFilter} key={index}>{skill}</li>
      )
  },
  handleListProjects(project, index, skills) {
    return (
      <div className='projectItem' onClick={this.handleProjectSelect} key={index}>
        <img className='projectImg' src={project.thumbnail}></img>
        <div className='projectTitle'>{project.title}</div>
        <div className='projSkills'>{project.skills.map(
            function(obj, key){
              return (
                <li className='skillPoint' key={key}>{obj}</li>
              )
            }
          )}
        </div>
      </div>
    )
  },
  handleSkillFilter(e){
    var filteredProjs = [];
    for (var i = 0; i < this.state.origProj.length; i++) {
      if (this.state.origProj[i].skills.indexOf(e.target.innerText) > -1) {
        filteredProjs.push(this.state.origProj[i]);
      }
    }
    this.setState({
      projects: filteredProjs
    })
  },
  handleProjectSelect() {
    console.log('you clicked a project');
  },
  render: function(){
    return (
      <div>
        <HomeUI
          logoProps={this.state.logoName}
          linkedInProps={this.state.linkedIn}
          githubProps={this.state.github}
          skills={this.state.skills}
          projects={this.state.projects}
          onListSkills={this.handleListSkills}
          onListProjects={this.handleListProjects}
          skillFilter={this.handleSkillFilter}
          onProjectSelect={this.handleProjectSelect}
          />
      </div>
    );
  }
});

export default Home;
