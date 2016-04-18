import React from 'react';
import Home from '../Containers/Home';
import {Link} from 'react-router';

const ProjectUI = React.createClass({
  render(){
    return (
      <div className='prjPage'>
        <h3 className='prjPageTitle'>{this.props.getTitle}</h3>
        <Link to='/'>
          <div className='backButton'>X</div>
        </Link>
        <p className='prjPageTxt'>{this.props.getDesc}<br/>--</p>
        <a className='prjPageLink' href={this.props.getLink}>Link</a><br/><br/>
        <img className='prjPageImg' src={this.props.getImg}></img>
      </div>
    );
  }
});

export default ProjectUI;
