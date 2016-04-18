import React from 'react';
import {Link} from 'react-router';



const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <nav>
        <Link to='/'>
          <button type='button' hidden>HOME PAGE</button>
        </Link>
        <br>
        </br>
        <Link to='/form'>
          <button type='button' hidden>FORM PAGE</button>
        </Link>
        <br>
        </br>
        <Link to='/project'>
          <button type='button' hidden>PROJECT PAGE</button>
        </Link>
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Main;
