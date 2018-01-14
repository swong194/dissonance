import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      userinput: null,
      passinput: null,
      demosubmit: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentWillReceiveProps(){
    clearTimeout(this.state.userinput);
    clearTimeout(this.state.passinput);
    clearTimeout(this.state.demosubmit);

    this.setState({username: '', password: ''});
  }

  componentWillUnmount(){
    clearTimeout(this.state.userinput);
    clearTimeout(this.state.passinput);
    clearTimeout(this.state.demosubmit);

    this.setState({username: '', password: ''});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(
      {username: this.state.username, password: this.state.password})
      .then(()=>(this.props.history.push('/servers/@me'))
    );
  }

  handleGuest(e){
    e.preventDefault();

    clearTimeout(this.state.userinput);
    clearTimeout(this.state.passinput);
    clearTimeout(this.state.demosubmit);

    this.setState({username: '', password: ''});

    if(this.props.match.path === '/signup'){
      this.props.history.push('/login');
    }

    const userinput = setTimeout(()=> {
      new Typed ('#username-input', { strings: ['demo'], typeSpeed: 125 });
    },0);
    const passinput = setTimeout(()=> {
      new Typed ('#password-input', { strings: ['password'], typeSpeed: 125 });
    },1200);
    const demosubmit = setTimeout(()=>{
      this.props.guestLogin({ username: 'demo', password: 'password' });
    },2600);

    this.setState(
      {userinput: userinput, passinput: passinput, demosubmit: demosubmit}
    );
  }

  handleRedirect(){
    this.props.removeErrors();
  }

  update(type){
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    let errors = this.props.errors.map((error, i) => {
      return(<span key={i}>{error}</span>);
    });

    const text = this.props.formType === 'signup' ? 'Sign Up' : 'Login';
    const otherText = this.props.formType === 'signup' ? 'login' : 'signup';
    const otherTextLink = this.props.formType ===
      'signup' ? 'Login' : 'Register';
    const otherMessage = this.props.formType ===
      'signup' ? 'Already have an account?' : 'Need an account?';

    return (
      <div id='session-form' className={`background-${this.props.number}`}>
        <div className='logo-responsive'>
          <img src={window.staticImages.for_black_logo} alt='dissonance logo'/>
        </div>
        <main>
        <div id='brand'>
          <img src={window.staticImages.logo_for_white} alt='logo'/>
          <img src={window.staticImages.dissonance_for_white} alt='dissonance logo'/>
          <div className='logo-line'></div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1>WELCOME BACK!</h1>
          <label htmlFor='username-input'>USERNAME</label>
          <input
            id='username-input'
            type='text'
            onChange={this.update('username')}
            value={this.state.username}/>
          <label htmlFor='password-input'>PASSWORD</label>
          <input
            id='password-input'
            type='password'
            onChange={this.update('password')}
            value={this.state.password}/>
          <input
            type='submit'
            value={text}/>
          <div className='errors'>
            {errors}
          </div>
          <div>
            <span>{otherMessage}</span> <Link onClick={this.handleRedirect}
              to={otherText}>{otherTextLink}</Link>
              <span> or login as </span>
              <button onClick={this.handleGuest}>Guest</button>
          </div>
        </form>
      </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
