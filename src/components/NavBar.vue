  <template>
    <div>
      <nav class="navbar navbar-expand-lg fixed-top home-nav mb-5" id="home-nav">
        <div class="container-fluid d-flex flex-column align-items-center">
          <!-- Title Row -->
          <div class="row w-100 text-center mx-auto navbar-brand">
              <h1 class=" title ">VIA VENETO ROYALE</h1>
          </div>
          <!-- Navbar Links Row -->
          <div class="row w-100">
            <button
              class="navbar-toggler mx-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/stay">Stay</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/dine">Dine</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
                <!-- <li class="nav-item">
                  <router-link class="nav-link" to="/reservations">Reservations</router-link>
                </li> -->
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Login/Register</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const navbar = document.getElementById("home-nav");
        if (window.scrollY > 10) {
          navbar.style.backgroundColor = "var(--primary-dark)";
        } else {
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      },
    },
  };
  </script>
  
  <style scoped>

.title {
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: italic;
} 


  .navbar {
    background: rgba(0, 0, 0, 0);
    font-family: Georgia, 'Times New Roman', Times, serif, serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.1rem;
    transition: background-color 0.2s ease-in;
  }

  .navbar:hover {
    background: var(--primary-dark) !important;
  }
  
  .navbar .navbar-brand {
    text-align: center;
  }
  
  .navbar .nav-link {
    color: #fff;
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
  
  nav a.router-link-active {
    /* color: #ecb904 !important; */
    /* color: var(--primary-light) !important; */
    color: var(--primary-light) !important;
  }

  nav a.router-link-active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  /* background-color: #ecb904; */
  background-color: var(--primary-light);
  transition: width 0.3s ease, left 0.3s ease;
}
  
  .nav-link {
    position: relative;
    display: inline-block;
    padding-bottom: 5px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    /* background-color: #ecb904; */
    background-color: var(--primary-light);
    transition: width 0.3s ease, left 0.3s ease;
  }
  
  .nav-link:hover {
    /* color: #ecb904 !important; */
    color: var(--primary-light) !important;
  }
  
  .nav-link:hover::after {
    width: 100%;
    left: 0;
  }
  
  .home-nav .container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    margin-bottom: 0.5rem;
    color: #fff;
  }
  </style>