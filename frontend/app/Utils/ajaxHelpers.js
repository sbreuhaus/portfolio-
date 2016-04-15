import axios from 'axios';

const helpers = {
  users: {
    getUsers(){
      return axios.get('http://localhost:3000/users')
    },
    addUser(user){
      return axios.post('http://localhost:3000/users/new', user)
    },
    findUser(user){
      return axios.get('http://localhost:3000/users/:' + user.name)
    },
    deleteUser(){
      return axios.delete('http://localhost:3000/users/delete')
    },
    updateUser(user){
      return axios.put('http://localhost:3000/users/update', user)
    }
  },
  projects: {
    getProjects(){
      return axios.get('http://localhost:3000/projects')
    },
    addProject(project){
      return axios.post('http://localhost:3000/projects/new', project)
    },
    findProject(projectID){
      return axios.get('http://localhost:3000/projects/find/' + projectID)
    },
    deleteProject(projectID){
      return axios.delete('http://localhost:3000/projects/delete/'+ projectID)
    },
    updateProject(project){
      return axios.put('http://localhost:3000/projects/update', project)
    }
  }
}

export default helpers;
