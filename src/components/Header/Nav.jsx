import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (

    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
        <Link to="/" class="nav-link" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
        <Link to="/Signup" class="nav-link" href="#">Sign Up</Link>
        </li>
      </ul>
    </div>
    // <div className="nav">
    //   <ul class="nav justify-content-center">
    //     <li class="nav-item">
    //       <Link to="/" class="nav-link" href="#">Home</Link>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Link</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Link</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Nav;
