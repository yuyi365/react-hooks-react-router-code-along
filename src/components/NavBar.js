import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  const NavBar = () => {
    return (
      <div>
        <NavLink
          to="/" /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          style={linkStyles}
          activeStyle={{ background : "darkblue" }}
        >
          Home
        </NavLink>
  
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{ background : "darkblue" }}
        >
          About
        </NavLink>
          
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{ background : "darkblue" }}
        >
          Login
        </NavLink>
  
        <NavLink
          to="/signup"
          exact
          style={linkStyles}
          activeStyle={{ background : "darkblue"}}
        >
          Sign Up
        </NavLink>
  
        <NavLink
          to="/messages"
          exact
          style={linkStyles}
          activeStyle={{ background : "darkblue" }}
        >
          Messages
        </NavLink>
  
      </div>
    )
  }

export default NavBar;