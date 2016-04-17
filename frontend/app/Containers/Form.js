import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import FormUI from '../Components/FormUI';
import AddProject from '../stateless/AddProjectUI';
import EditProject from '../Containers/EditProject';
import DeleteProject from '../Containers/DeleteProject';

const Form = React.createClass({
  getInitialState(){
    return {
      logoName: '',
      linkedIn: '',
      github: '',
      project: '',
      projectTitle: '',
      projectThumbnail:'',
      projectSkills: '',
      projectDesc: '',
      projectImg: '',
      projectLink: ''
    }
  },
  componentDidMount(){
    helpers.users.getUsers().then(function(res){
      if (res.data.length > 1) {
        console.log('got more than 1 in the database!');
        this.setState({
          logoName: res.data['0'].name,
          linkedIn: res.data['0'].linkedin,
          github: res.data['0'].github
        });
      console.log('initial state updated is: ', this.state.logoName);
      }
    }.bind(this))
  },
  //handles input in navigator and Projects
  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  },
  //handles ajax calls for navigator
  handleAjaxCall(e){
    switch (e.target.name) {
      case 'create':
        console.log("click add");
        const user = {
          name: this.state.logoName,
          linkedin: this.state.linkedIn,
          github: this.state.github
        };
        helpers.users.addUser(user)
        .then(function(response){
          console.log(response)
        });
        break;
      case 'delete':
        helpers.users.deleteUser();
        this.setState({
          logoName: '',
          linkedIn: '',
          github: ''
        })
        break;
      case 'update':
        console.log('clicked update');
        const userEdit = {
          name: this.state.logoName,
          linkedin: this.state.linkedIn,
          github: this.state.github
        };
        helpers.users.updateUser(userEdit);
      }
  },
  // handles CRUD choice for project
  handleProjectChoice (e){
    this.setState({
      project: e.target.value
    })
  },
  // handles form display for project CRUD choice
  handleProject(){
    switch (this.state.project) {
      case 'addProject':
        return <AddProject onInput={this.handleInput} onAddProject={this.handleAddProject}/>
      break;
      case 'editProject':
        console.log('all projects are',this.state.allProjects);
        return <EditProject allProjects={this.state.allProjects}/>
      break;
      case 'deleteProject':
        return <DeleteProject />
      break;
    }
  },
  handleAddProject (){
    // splitting skills
    const skillsArray = this.state.projectSkills.split(" ");
    // creating object to insert to db
    const projectToAdd = {
      title: this.state.projectTitle,
      thumbnail: this.state.projectThumbnail,
      skills: skillsArray,
      description: this.state.projectDesc,
      image: this.state.projectImg,
      link: this.state.projectLink
    };
    // inserting obj in db
    helpers.projects.addProject(projectToAdd);
  },
  render (){
    return (
      <div>
        <FormUI onInput={this.handleInput}
          onAjaxCall={this.handleAjaxCall} logoProps={this.state.logoName}
          linkedInProps={this.state.linkedIn} githubProps={this.state.github}
          onProjectChoice={this.handleProjectChoice}
          onProject={this.handleProject}
          />
      </div>
    )
  }
});

export default Form;
