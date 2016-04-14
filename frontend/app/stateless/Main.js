import React from 'react';
import {Link} from 'react-router';


const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <nav>
        <link to='/'>
          <a href="#">HOME PAGE</a>
        </link>
        <Link to='/form'>
          <a href="#">FORM PAGE</a>
        </Link>
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
