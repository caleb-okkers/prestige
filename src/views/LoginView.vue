<template>

<div class="content">
  <div class="overlay">
  <div class="container justify-content-center about pt-5">
    <h1 class="heading pt-5">{{ hasAccount ? 'Login' : 'Register' }}</h1>

    <div class="form-container mt-3">
      <!-- Login Form -->
      <form v-if="hasAccount" @submit.prevent="login">
        <div class="form-group">
          <label for="loginEmail">Email</label>
          <input type="email" v-model="loginEmail" id="loginEmail" required />
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input type="password" v-model="loginPassword" id="loginPassword" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <!-- Register Form -->
      <form v-else @submit.prevent="register">
        <div class="form-group">
          <label for="registerEmail">Email</label>
          <input type="email" v-model="registerEmail" id="registerEmail" required />
        </div>
        <div class="form-group">
          <label for="registerPassword">Password</label>
          <input type="password" v-model="registerPassword" id="registerPassword" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" v-model="confirmPassword" id="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>

      <p class="toggle">
        {{ hasAccount ? "Don't have an account?" : 'Already have an account?' }}
        <a href="#" @click.prevent="toggleForm">{{ hasAccount ? 'Register' : 'Login' }}</a>
      </p>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      hasAccount: true, // Toggle between Login and Register
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    toggleForm() {
      this.hasAccount = !this.hasAccount;
    },
    login() {
      // Handle login logic
      console.log('Login with:', this.loginEmail, this.loginPassword);
    },
    register() {
      // Handle registration logic
      if (this.registerPassword !== this.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Register with:', this.registerEmail, this.registerPassword);
    }
  }
};
</script>

<style scoped>

.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-chaitaastic-1797161.jpg?raw=true) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;

}
.overlay {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
}

.heading {
  margin-top: 2rem;
  color: var(--primary-light);
}
.form-container {
  max-width: 400px;
  margin: auto;
}
.form-group {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-dark);
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #000;
}

.toggle {
  margin-top: 1rem;
}

label, p {
  color: var(--primary-light);
}

a {
  color: var(--primary-light);
  text-decoration: none;
  cursor: pointer;
}


</style>
