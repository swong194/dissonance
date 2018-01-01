import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import logo from '../../logos/for_black_logo.png';

class Greeting extends React.Component{
  render(){
    if(this.props.currentUser === null){
      return(
        <div id='greeting'>
          <div id='greeting-nav'>
            <div>
            <div>
              <img src='/assets/for_black_logo' alt='dissonance logo'/>
            </div>
            <div>
              <a href='#'>
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              <a href='#'>
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
              <Link className='session' to='/login'>Login</Link>
            </div>
          </div>
        </div>
          <main>
            <h1>It's time to ditch Discord.</h1>
            <p>Easy to use live chat system. Keep your friends close and Dissonance closer.</p>
          </main>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
