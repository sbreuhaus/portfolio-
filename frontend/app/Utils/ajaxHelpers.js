import axios from 'axios';

const helpers = {
  users: {
    getUsers(){
      return axios.get('http://localhost:3000/users')
    },
    addUser:user){
      return axios.post('http://localhost:3000/users/new', user)
    },
    findUser(user){
      return axios.get('http://localhost:3000/users/' + user.name)
    },
    deleteUser(user){
      return axios.delete('http://localhost:3000/users/delete', user.name)
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
    findProject(project){
      return axios.get('http://localhost:3000/projects/' + project.name)
    },
    deleteProject(project){
      return axios.delete('http://localhost:3000/projects/delete', project.name)
    },
    updateProject(project){
      return axios.put('http://localhost:3000/projects/update', project)
    }
  }
}
