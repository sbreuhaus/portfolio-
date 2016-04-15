import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import HomeUI from '../Components/HomeUI';

const Home = React.createClass({
  getInitialState (){
    return {
      logoName: '',
      linkedIn: '',
      github: '',
      skills: [],
      projects: []
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
          skillsArray.push(res.data[i].skills[j]);
        }
      }
      console.log('the full set of skills is: ', skillsArray);
      this.setState({
        skills: skillsArray,
        projects: res.data
      })
      console.log('these are the skills: ', this.state.skills);
      console.log('these are the projects: ', this.state.projects);
    }.bind(this))
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
          />
      </div>
    );
  }
});

export default Home;
