import React from 'react';

const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <nav>
        <p> this is going to be our header</p>
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
