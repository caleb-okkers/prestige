<template>
    <footer class="container-fluid">
      <div class="row text-center py-4">
        <div class="col-md-4 align-content-center">
          <!-- Social Media Links -->
          <ul class="list d-flex justify-content-center align-content-center">
            <li><a href="https://www.facebook.com/profile.php?id=61562437798479" class="text-light" target="_blank">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" fill="#fdfdfc" class="fill-000000"></path></svg>
            </a></li>
            
            <li><a href="https://www.instagram.com/argo.digitalmarketing/" class="text-light" target="_blank">
                <svg fill="#FDFDFC" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 273 256 256" xml:space="preserve" stroke="#FDFDFC"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1 C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"></path> </g></svg>
            </a></li>
            <li><a href="https://x.com/mrgrisss" class="text-light" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" enable-background="new 0 0 24 24"><path d="M14.095 10.316 22.286 1h-1.94L13.23 9.088 7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543L16.45 23H23l-8.905-12.684zm-2.658 3.022-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.926-8.3z" fill="#fdfdfc" class="fill-000000"></path></svg>
            </a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <!-- Address -->
          <p class="mb-0">457 Via Veneto,</p>
          <p class="mb-0">Rome, Italy</p>
          <p class="mb-0">00187</p>
        </div>
        <div class="col-md-4">
          <!-- Contact Information -->
          <p class="mb-0">Email: info@viavenetoroyale.com</p>
          <p class="mb-0">Phone: +39 06 1234 5678</p>
          <p class="mb-0">Reservations: +39 06 8765 4321</p>
        </div>
      </div>
      <div class="row">
        <p class="lead text-center w-100">Via Veneto Royale &copy; <span>{{ cYear }}</span></p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  footer {
    color: var(--primary-light);
    background: var(--primary-dark);
    font-family: "Bona Nova SC", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    bottom: 0;
    z-index: 1;
  }
  
  footer p, footer a {
    color: var(--primary-light);
    text-decoration: none;
  }
  
  footer ul {
    list-style: none;
    padding: 0;
  }
  
  footer ul li a:hover {
    color: var(--primary);
  }
  
  footer .row {
    margin: 0;
  }
  
  footer .lead {
    padding-top: 1rem;
  }

  svg {
    width: 2rem;
    padding: 0.3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  </style>