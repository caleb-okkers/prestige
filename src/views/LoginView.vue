<template>
  <div class="content">
    <div class="overlay">
      <div class="container justify-content-center about pt-5">
        <h1 class="heading pt-5">{{ hasAccount ? "Login" : "Register" }}</h1>

        <div class="form-container mt-3">
          <!-- Login Form -->
          <form v-if="hasAccount" @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="loginEmail">Email</label>
              <input
                type="email"
                v-model="loginEmail"
                id="loginEmail"
                required
              />
            </div>
            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input
                type="password"
                v-model="loginPassword"
                id="loginPassword"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <!-- Register Form -->
          <form v-else @submit.prevent="handleRegister">
            <div class="form-group">
              <label for="registerFirstName">First Name</label>
              <input
                type="text"
                v-model="registerFirstName"
                id="registerFirstName"
                required
              />
            </div>
            <div class="form-group">
              <label for="registerLastName">Last Name</label>
              <input
                type="text"
                v-model="registerLastName"
                id="registerLastName"
                required
              />
            </div>
            <div class="form-group">
              <label for="registerPhoneNumber">Phone Number</label>
              <input
                type="text"
                v-model="registerPhoneNumber"
                id="registerPhoneNumber"
                required
              />
            </div>
            <div class="form-group">
              <label for="registerEmail">Email</label>
              <input
                type="email"
                v-model="registerEmail"
                id="registerEmail"
                required
              />
            </div>
            <div class="form-group">
              <label for="registerPassword">Password</label>
              <input
                type="password"
                v-model="registerPassword"
                id="registerPassword"
                required
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>

          <p class="toggle">
            {{
              hasAccount ? "Don't have an account?" : "Already have an account?"
            }}
            <a href="#" @click.prevent="toggleForm">{{
              hasAccount ? "Register" : "Login"
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      hasAccount: true, // Toggle between Login and Register
      loginEmail: "",
      loginPassword: "",
      registerFirstName: "",
      registerLastName: "",
      registerPhoneNumber: "",
      registerEmail: "",
      registerPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["login", "register"]),

    toggleForm() {
      this.hasAccount = !this.hasAccount;
    },

    async handleLogin() {
      try {
        const response = await this.login({
          email: this.loginEmail,
          password: this.loginPassword,
        });

        if (response) {
          if (this.$store.getters.currentUser.role === "Admin") {
            this.$router.push("/admin-dashboard");
          } else {
            this.$router.push("/user-dashboard");
          }
        } else {
          alert("Login failed!");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    },

    async handleRegister() {
      if (this.registerPassword !== this.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      try {
        const response = await this.register({
          first_name: this.registerFirstName,
          last_name: this.registerLastName,
          phone_number: this.registerPhoneNumber,
          email: this.registerEmail,
          password: this.registerPassword,
        });

        if (response) {
          // Clear the form fields
          this.registerFirstName = "";
          this.registerLastName = "";
          this.registerPhoneNumber = "";
          this.registerEmail = "";
          this.registerPassword = "";
          this.confirmPassword = "";

          // Toggle to the login form
          this.toggleForm();
        }
      } catch (error) {
        alert("An error occurred during registration.");
      }
    },
  },
};
</script>

<style scoped>
.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-chaitaastic-1797161.jpg?raw=true)
    no-repeat center center fixed;
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
label,
p {
  color: var(--primary-light);
}
a {
  color: var(--primary-light);
  text-decoration: none;
  cursor: pointer;
}
</style>
