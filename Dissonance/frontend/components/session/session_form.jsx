import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then(
      ()=>(this.props.history.push('/'))
    );
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
    const otherTextLink = this.props.formType === 'signup' ? 'Login' : 'Register';
    const otherMessage = this.props.formType === 'signup' ? 'Already have an account?' : 'Need an account?';

    return (
      <div id='session-form' className={`background-${this.props.number}`}>
        <div className='logo-responsive'>
          <img src='/assets/for_black_logo' alt='dissonance logo'/>
        </div>
        <main>
        <div id='brand'>
          <img src='/assets/logo_for_white' alt='logo'/>
          <img src='/assets/dissonance_for_white' alt='dissonance logo'/>
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
          <div>
            <span>{otherMessage}</span> <Link to={otherText}>{otherTextLink}</Link>
          </div>
        </form>
      </main>
      <div className='errors'>
        {errors}
      </div>
      </div>
    );
  }
}

export default SessionForm;
