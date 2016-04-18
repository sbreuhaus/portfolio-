import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import HomeUI from '../Components/HomeUI';
import {Link} from 'react-router';
import Project from '../Containers/Project'
import routes from '../Config/routes';

var origProjList;

const Home = React.createClass({
  contextTypes: {
    router: function() {
      return React.PropTypes.object.isRequired;
    }
  },
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
      origProjList = res.data;
      console.log('origProjList is ', origProjList);
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
  handleRestoreProjects(){
    this.setState({
      projects: origProjList
    })
  },
  handleProjectSelect(e) {
    console.log('you clicked a project');
    console.log(e.target);
    for (var i = 0; i < this.state.projects.length; i++) {
      if (e.target.src === this.state.projects[i].thumbnail || e.target.innerText === this.state.projects[i].title){
        console.log('project title: '+this.state.projects[i].title);
        console.log('project desc: '+this.state.projects[i].description);
        this.context.router.push({
          pathname: '/project',
          query: {
            sendTitle: this.state.projects[i].title,
            sendDesc: this.state.projects[i].description,
            sendImg: this.state.projects[i].image,
            sendLink: this.state.projects[i].link
          }
        })
        console.log(this.context);
      }
    }
  },
  displayHomePage(){
    return (
      <div className='contentDisplay'>
        <div className='navigatorDisplay'>
          <div className='nameDisplay' onClick={this.handleRestoreProjects}>{this.state.logoName}</div>
          <a className='linkedinDisplay' href={this.state.linkedIn}>Linkedin</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='githubDisplay' href={this.state.github}>Github</a>
        </div>
        <ul className='skillList'>
          {this.state.skills.map(this.handleListSkills)}
        </ul>
        <div className='projectsDisplay'>
          {this.state.projects.map(this.handleListProjects)}
        </div>
        <footer className='footer'>
          <p>Built with <b><a href='https://github.com/jumpingZebra/portfolio-'>Zebra Portfolio</a></b></p>
        </footer>
      </div>
    );
  },
  displayProject(){
    return (
      <div className='prjPage'>
        <h3 className='prjPageTitle'>Title</h3>
        <Link to='/'>
          <div className='backButton'>X</div>
        </Link>
        <p className='prjPageTxt'>This is going to be the content of the page etc etc etc etc  the content of the page etc etc etc etc  the content of the page etc etc etc etc  the content of the page etc etc etc etc e content of the page etc etc etc etc  the content of the page etc etc etc etc  the content of the page etc etc etc etc  the content of the pag 900 by 506 pixels for the image<br/>--</p>
        <a className='prjPageLink'>Link</a><br/><br/>
        <img className='prjPageImg' src='https://4kwallpapers.co/wp-content/uploads/2015/07/pink-sky-over-mountain-peak-4k-wallpaper.jpg'></img>
      </div>
    );
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
          onProjectSelect={this.handleProjectSelect}
          onRestoreProjects={this.handleRestoreProjects}
          onDisplayHomePage={this.displayHomePage}
          onDisplayProject={this.displayProject}
          />
      </div>
    );
  }
});

export default Home;
