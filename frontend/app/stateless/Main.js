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
      </nav>
      <main>
        {props.children}
      </main>
      <footer>
        <p>This is going to be our footer at some point we hope</p>
      </footer>
    </div>
  )
}

export default Main;
