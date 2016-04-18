import React from 'react';
import helpers from '../Utils/ajaxHelpers';
import ProjectUI from '../Components/ProjectUI';
import {Link} from 'react-router';
import Home from '../Containers/Home';
import routes from '../Config/routes';

const Project = React.createClass({
  contextTypes: {
    router: function() {
      return React.PropTypes.object.isRequired;
    }
  },
  someFn: function(){
    this.context.router.getCurrentParams();
  },
  getInitialState(){
    return {
      getTitle: '',
      getDesc: '',
      getImg: '',
      getLink: '',
    }
  },
  componentWillMount(){
    console.log('this.props.location is ', this.props.location);
    const query = this.props.location.query;
    console.log('query: ', query);
    this.setState({
      getTitle: query.sendTitle,
      getDesc: query.sendDesc,
      getImg: query.sendImg,
      getLink: query.sendLink
    })
  },
  render(){
    return (
      <div>
        <ProjectUI
          getTitle={this.state.getTitle}
          getDesc={this.state.getDesc}
          getImg={this.state.getImg}
          getLink={this.state.getLink}
          />
      </div>
    );
  }
})

export default Project;
