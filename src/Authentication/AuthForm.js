import { useState, useRef, useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import classes from './AuthForm.module.css';
import CartContext from '../Store/CartContext';

const AuthForm = () => {
  const authCtx = useContext(CartContext);
  const navigate  = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const[sending , setSending] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSending(true);
    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;
    let url;

    if (isLogin) {
    
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXWGtaRO5IWyr7qReEUM1FqCliSghEbPg'
    }
    
    else {
      
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXWGtaRO5IWyr7qReEUM1FqCliSghEbPg'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setSending(false);
      if (response.ok) {
        // alert('user created')
        return response.json();


      } else {
        return response.json().then((data) => {
          console.log(data);
          throw new Error(data.error.message)
        });
      }
    }).then((data) => {
      authCtx.login(data.idToken,data.email.replace(/[@.]/g, ''));
      // authCtx.email()
      navigate('/store')
        
    }).catch((err) => {
      alert(err.message)
    })

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email'
           id='email' 
           required  
           ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passRef}
          />
        </div>
        <div className={classes.actions}>
        {sending && <p 
             style={{
              color: 'aqua'
             }}>
              sending Request</p>}
         {!sending && <button >{
            isLogin ? 'LogIn' : 'Create Account'
          }</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
