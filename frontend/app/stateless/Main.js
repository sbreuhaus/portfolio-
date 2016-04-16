import React from 'react';
import {Link} from 'react-router';



const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <nav>
        <Link to='/'>
          <button type='button'>HOME PAGE</button>
        </Link>
        <br>
        </br>
        <Link to='/form'>
          <button type='button'>FORM PAGE</button>
        </Link>
<<<<<<< HEAD
        <Link to='/project'>
          <button type='button'>PROJECTS</button>
=======
        <br>
        </br>
        <Link to='/project'>
          <button type='button'>PROJECT PAGE</button>
>>>>>>> c617038bd1bb8fe4f1255b40d8909cdcd18740d1
        </Link>
      </nav>
      <main>
        {props.children}
      </main>
      <footer className='footer'>
        <p>This is going to be our footer</p>
      </footer>
    </div>
  )
}

export default Main;
