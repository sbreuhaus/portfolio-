import React from 'react';
import Home from '../Containers/Home';
import {Link} from 'react-router';

const ProjectUI = React.createClass({
  render(){
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
  }
});

export default ProjectUI;
