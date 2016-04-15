import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import FormUI from '../Components/FormUI';
import AddProject from '../stateless/AddProjectUI';
import EditProject from '../Components/EditProjectUI';
import DeleteProject from '../Components/DeleteProjectUI';

const Form = React.createClass({
  getInitialState(){
    return {
      logoName: '',
      linkedIn: '',
      github: '',
      project: '',
      allProjects: [],
      fuckthis = ''
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
  },
  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  },
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
  handleProjectChoice (e){
    console.log('handleProjectChoice', e.nativeEvent);
    this.setState({
      project: e.target.value
    })
    console.log('state is', this.state.project);
  },
  handleProject(){
    switch (this.state.project) {
      case 'addProject':
        console.log('add Project');
        return(
          <AddProject />
        );
        break;
      case 'editProject':
        console.log('edit Project');
        helpers.projects.getProjects()
        .then(function(res){
          // console.log('getting all projects', res.data);
          this.setState({
            allProjects: res.data
          });
        }.bind(this));
        return (
          <EditProject allProjects={this.state.allProjects}/>
        )
        break;
      case 'deleteProject':
      console.log('delete project');
        return(
          <DeleteProject />
        )
      default:
    }
  },
  render (){
    return (
      <div>
        <FormUI onInput={this.handleInput}
          onAjaxCall={this.handleAjaxCall} logoProps={this.state.logoName}
          linkedInProps={this.state.linkedIn} githubProps={this.state.github}
          onProjectChoice={this.handleProjectChoice}
          />
        {this.handleProject()}
        {}
      </div>
    )
  }
});

export default Form;
