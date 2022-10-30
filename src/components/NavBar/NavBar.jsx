import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.scss";

function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Ninth navbar example">
    <div class="container-xl">
      <a className="nombre-tienda" class="navbar-brand" href="#">Tienda Deportiva</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07XL" >
        <ul className="lista" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">ZAPATILLAS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">REMERAS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PANTALONES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHORTS Y BERMUDAS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BUZOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ACCESORIOS</a>
          </li>
          <li>
          <CartWidget />
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
  );
}

export default NavBar;

