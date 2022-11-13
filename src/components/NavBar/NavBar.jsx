import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Ninth navbar example">
    <div class="container-xl">
      <Link to="/"><img class="navbar-brand" className="logo" src="../imgs/logo.png" alt="logo"></img></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07XL">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/category/Apple" class="nav-link">Apple</Link>
          </li>
          <li class="nav-item">
            <Link to="/category/Samsung" class="nav-link">Samsung</Link>
          </li>
          <li class="nav-item">
            <Link to="/category/Xiaomi" class="nav-link">Xiaomi</Link>
          </li>
          <li class="nav-item">
            <Link to="/category/Motorola" class="nav-link">Motorola</Link>
          </li>
          <li class="nav-item">
            <Link to="/category/Accesorios" class="nav-link">Accesorios</Link>
          </li>
          <li class="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
  );
}

export default NavBar;

