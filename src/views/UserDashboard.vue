<template>
    <div class="content">
      <div class="overlay">
        <div class="container justify-content-center user pt-5">
          <h1 class="heading pt-5">User Dashboard</h1>
  
          <section class="user-section">
            <div class="row pt-4">
              <h2 class="sub-heading">Your Information</h2>
            </div>
            <button @click="showUpdateUserModal = true" class="btn mt-3 mb-3">Update Information</button>
            <button @click="confirmDeleteAccount" class="btn mt-3 mb-3 delete-account">Delete Account</button>
            <button @click="handleLogout" class="btn mt-3 mb-3">Logout</button>
            
            <div class="user-info" v-if="user">
              <p><strong>Name:</strong> {{ user.first_name }} {{ user.last_name }}</p>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Phone Number:</strong> {{ user.phone_number }}</p>
            </div>
  
            <!-- Update User Modal -->
            <div v-if="showUpdateUserModal" class="modal-overlay">
              <div class="modal-content">
                <h3>Update Your Information</h3>
                <input v-model="currentUser.first_name" type="text" placeholder="First Name">
                <input v-model="currentUser.last_name" type="text" placeholder="Last Name">
                <input v-model="currentUser.email" type="email" placeholder="Email">
                <input v-model="currentUser.phone_number" type="text" placeholder="Phone Number">
                <input v-model="currentUser.password" type="password" placeholder="New Password (leave blank if unchanged)">
                <button class="btn mt-1 mb-1" @click="updateUser">Save changes</button>
                <button class="btn mt-1 mb-1" @click="showUpdateUserModal = false">Cancel</button>
              </div>
            </div>
  
            <div class="row pt-4">
              <h2 class="sub-heading">Your Reservations</h2>
            </div>
  
            <table class="table reservations-table">
              <thead>
                <tr>
                  <th>Reservation ID</th>
                  <th>Suite Name</th>
                  <th>Check-in Date</th>
                  <th>Check-out Date</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="reservation in userReservations" :key="reservation.reservation_id">
                  <td>{{ reservation.reservation_id }}</td>
                  <td>{{ reservation.suite_name }}</td>
                  <td>{{ formatDate(reservation.check_in_date) }}</td>
                  <td>{{ formatDate(reservation.check_out_date) }}</td>
                  <td>{{ reservation.total_price }} EUR</td>
                  <td>{{ reservation.status }}</td>
                  <td>
                    <button v-if="canCancel(reservation)" class="btn mt-1 mb-1" @click="cancelReservation(reservation.reservation_id)">Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  import { toast } from "vue3-toastify";
  
  export default {
    name: 'UserDashboard',
    data() {
      return {
        showUpdateUserModal: false,
        currentUser: {},
      }
    },
    computed: {
      ...mapState(['user', 'reservations']),
      userReservations() {
        if (!this.reservations) return [];
        return this.reservations.filter(reservation => reservation.user_id === this.user.user_id)
      }
    },
    methods: {
      ...mapActions(['fetchUser', 'fetchReservations', 'updateUser', 'deleteUser', 'cancelReservation', 'logout']),
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString()
      },
      canCancel(reservation) {
        const today = new Date()
        const checkInDate = new Date(reservation.check_in_date)
        const daysBefore = (checkInDate - today) / (1000 * 60 * 60 * 24)
        return daysBefore > 2
      },
      updateUser() {
        this.$store.dispatch('updateUser', { ...this.currentUser, user_id: this.user.user_id }).then(() => {
          this.showUpdateUserModal = false;
          this.fetchUser(this.user.user_id);
        });
      },
      confirmDeleteAccount() {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
          this.deleteUser(this.user.user_id).then(() => {
            this.$router.push('/');
          });
        }
      },
      cancelReservation(reservationId) {
        if (confirm('Are you sure you want to cancel this reservation?')) {
          this.$store.dispatch('cancelReservation', reservationId).then(() => {
            this.fetchReservations();
          });
        }
      },
      created() {
        // Fetch user data and reservations when the component is created
        if (this.user && this.user.user_id) {
          this.fetchUser(this.user.user_id);
        }
        this.fetchReservations();
      },

      async handleLogout() {
      try {
        await this.logout(); 
        toast.success('Logout successful', {
          autoClose: 2000,
          position: 'bottom-center'
        });
        // The redirect is handled by the `logout` action in the store
      } catch (error) {
        toast.error('An error occurred during logout', {
          autoClose: 2000,
          position: 'bottom-center'
        });
      }
    }
    },

  }
  </script>
  
  <style scoped>
  .content {
    background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-mikegiugliano-2928058.jpg?raw=true)
      no-repeat center center fixed;
    background-size: cover;
    background-position: top;
    width: 100%;
    min-height: 100vh;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .heading, .sub-heading {
    color: var(--primary-light);
  }
  
  .user-info {
    background-color: var(--primary-dark);
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    color: var(--primary-light);
  }
  
  .user-info p {
    margin-bottom: 10px;
    color: var(--primary-light);
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .table th {
    background-color: var(--primary-dark);
    color: var(--primary-light);
    border: 1px solid #000;
  }
  
  .btn {
    margin-right: 10px;
    color: var(--primary-light);
    background: var(--primary-dark);
    border: 0.2px solid var(--primary-dark) !important;
    border-radius: 0 !important;
  }
  
  .btn:hover {
    background: #000;
  }
  
  .delete-account {
    background-color: #a70112;
    border-color: #a70112;
  }
  
  .delete-account:hover {
    background-color:#a30101;
    border-color:#a30101;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    width: 30%;
  }
  
  .modal-content input {
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  

  @media (max-width: 992px) {

.table {
overflow-x: auto;
white-space: nowrap; 
}

table button {
width: 4.5rem;
font-size: 1rem;
}
}

@media (max-width: 928px) {

.table {
display: block; 
overflow-x: auto; 
white-space: nowrap; 
}
}

@media (max-width: 768px) {

  .modal-content {
      width: 90%;
    }
  
    .table {
      font-size: 0.8rem;
    }
  
    .btn {
      font-size: 0.8rem;
      padding: 0.2rem 0.5rem;
    }

.table {
display: block; 
overflow-x: auto; 
white-space: nowrap; 
}

.table img {
width: 2rem; 
}

.table th,
.table td {
padding: 4px; 
font-size: 1rem; 
}

table button {
width: 4.5rem;
font-size: 1rem;
}

.user-section {
margin: 0 !important;
padding: 0 !important;
margin-top: 15rem !important;
width: 100vw !important;
}

.overlay {
  padding: 0 !important;
}

.user {
padding: 0;
}

}


@media (max-width: 575px) {
.table th,
.table td {
font-size: 0.9rem; 
}

.user-section {
margin: 0 !important;
padding: 0 !important;
margin-top: 12rem !important;
width: 100vw !important;
}

.overlay {
  padding: 0 !important;
}

.user {
padding: 0;
}

table button {
width: 3.5rem;
font-size: 0.7rem;
}
}

@media (max-width: 475px) {

.table {
display: block;
}

table img {
aspect-ratio: 1;
object-fit: contain;
object-position: center;
width: 2rem;
}

table button {
width: 3.5rem;
font-size: 0.7rem;
}

.user-section {
margin: 0 !important;
padding: 0 !important;
margin-top: 0rem !important;
width: 100vw !important;
}

.heading {
margin-top: 2rem !important;
}

.overlay {
padding: 0 !important;
}

.user {
padding: 0;
}

.user-heading-row {
padding-top: 0;
}
}

  @media (max-width: 375px) {
.table {
display: block;
}

table img {
aspect-ratio: 1;
object-fit: contain;
object-position: center;
width: 2rem;
}

table button {
width: 3.5rem;
font-size: 0.7rem;
}

.user-section {
margin: 0 !important;
padding: 0 !important;
margin-top: 0rem !important;
width: 100vw !important;
}

.heading {
  margin-top: 1.5rem !important;
}

.overlay {
  padding: 0 !important;
}

.user {
padding: 0;
}

.user-heading-row {
  padding-top: 0;
}
}
  </style>