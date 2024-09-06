<template>
    <div>
      
  
      <nav class="navbar navbar-expand-lg fixed-top home-nav mb-5" id="home-nav">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img
              src=""
              alt="logo"
              loading="lazy"
            />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/products"
                  >Products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register"
                  >Register</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  <style scoped>
  img {
    width: 4rem;
  }
  
  .navbar {
      background: #fff;
      font-family: "Bona Nova SC", serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.1rem;
      
  }
  
  .navbar .nav-link {
      color: #777;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
  }
  
  .navbar-toggler {
      border: none !important;
      outline: none !important; 
  }
  
  .navbar-toggler:focus {
      box-shadow: none !important; 
      background: #fff !important;
  }
  
  nav a.router-link-exact-active {
    color: #000 !important;
    }
  
  
  .logo {
      width: 4rem;
  }
  
  .nav-link {
      position: relative;
      display: inline-block;
      padding-bottom: 5px;
      text-decoration: none;
      /* color: #000; */
      transition: color 0.3s ease;
  }
  
  .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px; 
      bottom: 0;
      left: 50%;
      background-color: #000; 
      transition: width 0.3s ease, left 0.3s ease;
  }
  
  .nav-link:hover {
    color: #000 !important; 
  }
  
  .nav-link:hover::after {
      width: 100%;
      left: 0;
  }
  
  </style>