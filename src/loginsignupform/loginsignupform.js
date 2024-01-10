import './loginsignupform.css'
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react';
import { useState } from 'react';

const Loginsignupform = () => {
  
  const [action, setaction] = useState('Login');
  const [details, setdetails] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".box"), {
      max: 5,
      speed: 10,
      glare: true,
      'max-glare': 0.50
    })
  })

  const handelchange = (name, event) => {
    event.preventDefault();
    setdetails((prv) => {
      return {
        ...prv,
        [name]: event.target.value
      }
    })
  };

  const onChnagePage = (action) => {
    console.log("details", details)
    setaction(action);
  }

  return (
    <div className="box">
      <div className="elements code"></div>
      <div className="elements name">
        <h2>{action}</h2>
      </div>
      <div className="elements content">
        <form >
          {action === "Login" ? <div></div> : <input type='text' placeholder='name' onChange={(e) => handelchange('name', e)} />}

          <input type="text" placeholder="email" onChange={(e) => handelchange('email', e)} />
          <input type="password" placeholder="password" onChange={(e) => handelchange('password', e)} />
          <div className={action === 'Login' ? "submit" : "submit"}>
            <button type='button' onClick={() => onChnagePage('Login')}>Login</button>
          </div>
          <div className={action === "Sign Up" ? "submit" : "submit"}>
            <button type='button' onClick={() => onChnagePage("Sign Up")}>signUp</button>
          </div>
        </form>
      </div>
      <div className="card"></div>
    </div>
  )
}
export default Loginsignupform;