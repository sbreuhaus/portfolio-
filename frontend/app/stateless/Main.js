import React from 'react';
import {Link} from 'react-router';


const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <nav>
        <div>
          <Link to='/'>
            <div><span>HOME PAGE</span></div>
          </Link>
        </div>
        <div>
          <Link to='/form'>
            <div><span>FORM PAGE</span></div>
          </Link>
        </div>
      </nav>
      <main>
        {props.children}
      </main>
      <footer>
        <p>This is going to be our footer</p>
      </footer>
    </div>
  )
}

export default Main;
