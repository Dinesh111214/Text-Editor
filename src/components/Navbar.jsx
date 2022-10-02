import React from "react"
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return(
      <>    
  <nav className={`navbar navbar-expand navbar-${props.mode}  bg-${props.mode} `}>
    <a className="navbar-brand" href="/">{props.title}</a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active ">
        <Link className="navbar-brand nav-link mx-3" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-brand nav-link mx-3" to="/About">About</Link>
      </li>
     </ul>
<div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light'}`}>
  <input className="my-3 form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="my-2 navbar-brand form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
</div>
  </div>
</nav>
    </>
  )
}
