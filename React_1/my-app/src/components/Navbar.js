import React  from 'react'
import App from '../App'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
    return (
  
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <Link className="navbar-brand" to="/" style={{color:props.mode==='darkred'?'white':'grey'}}>{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color:props.mode==='darkred'?'white':'grey'}}>{props.home} <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about" style={{color:props.mode==='darkred'?'white':'grey'}} >About</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" style={{color:props.mode==='darkred'?'white':'grey'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
          <a className="dropdown-item" style={{color:props.mode==='darkred'?'white':'black'}} href="#">Action</a>
          <a className="dropdown-item" style={{color:props.mode==='darkred'?'white':'black'}} href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

<div className={`form-check form-switch text-${props.mode==='light'?'danger':'light'}`} >
  <input className="form-check-input" onClick={props.toggleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Red Mode</label>
</div>
  </div>
  </div>
</nav> 
     
    )
  
}

//Defines what should be the datatype of variables-----------
// Navbar.PropTypes={title:PropTypes.string,
//                   home: PropTypes.string}

//SETS THE DEFAULT VALUE TO PROPS VARIABLES------------------
// Navbar.defaultProps={
//     title:'Set Your title here',
//     home:'About Text here'

// }