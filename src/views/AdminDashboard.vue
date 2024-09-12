<template>
  <div class="content">
    <div class="overlay">

      
      <div class="container justify-content-center admin pt-5">
        <h1 class="heading pt-5">Admin Dashboard</h1>

  <section class="admin-section">

      
<div class="row  pt-4">
  <h2 class="sub-heading">Users</h2>
</div>
<button @click="showAddUserForm = true" class="add-user-button btn mt-3 mb-3">Add User</button>

<!-- Add User Form -->
<div v-if="showAddUserForm" class="modal-overlay">
  <div class="modal-content">
    <h3>Add New User</h3>
    <input v-model="newUser.first_name" type="text" placeholder="First Name">
    <input v-model="newUser.last_name" type="text" placeholder="Last Name">
    <input v-model="newUser.email" type="email" placeholder="Email">
    <input v-model="newUser.password" type="password" placeholder="Password">
    <input v-model="newUser.phone_number" type="text" placeholder="Contact Number">
    <button class="btn mt-1 mb-1" @click="addUser">Submit</button>
    <button class="btn mt-1 mb-1" @click="showAddUserForm = false">Cancel</button>
  </div>
</div>


<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  <tr v-for="user in users" :key="user.user_id">
    <td>{{ user.user_id }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.role }}</td>
    <td>
      <button class="btn mt-1 mb-1" @click="openUpdateUserModal(user)">Update</button>
      <button class="btn mt-1 mb-1" @click="deleteUser(user.user_id)">Delete</button>
    </td>
  </tr>
</tbody>
</table>

<!-- Update User Modal -->
<div v-if="showUpdateUserModal" class="modal-overlay">
<div class="modal-content">
  <h3>Update User</h3>
  <input v-model="currentUser.first_name" type="text" placeholder="First Name">
  <input v-model="currentUser.last_name" type="text" placeholder="Last Name">
  <input v-model="currentUser.email" type="email" placeholder="Email">
  <input v-model="currentUser.password" type="password" placeholder="Password">
  <input v-model="currentUser.phone_number" type="text" placeholder="Phone Number">
  <button class="btn mt-1 mb-1" @click="updateUser(currentUser)">Save changes</button>
  <button class="btn mt-1 mb-1" @click="closeUpdateUserModal">Cancel</button>
</div>
</div>




<div class="row pt-4">
<h2 class="sub-heading">Suites</h2>
</div>

<button @click="showAddsuiteForm = true" class="add-suite-button btn mt-3 mb-3">Add suite</button>

<!-- Add suite Form -->
<div v-if="showAddsuiteForm" class="modal-overlay">
<div class="modal-content">
  <h3>Add New Suite</h3>
  <input v-model="newSuite.img_url" type="text" placeholder="Suite URL">
  <input v-model="newSuite.suite_name" type="text" placeholder="Suite Name">
  <input v-model="newSuite.suite_number" type="text" placeholder="Suite Number">
  <input v-model="newSuite.suite_type" type="text" placeholder="Suite Type">
  <input v-model="newSuite.max_occupancy" type="text" placeholder="Max occupancy">
  <input v-model="newSuite.description" type="text" placeholder="Description">
  <input v-model="newSuite.price_per_night" type="text" placeholder="Price per Night">
  <button class="btn mt-1 mb-1" @click="addsuite">Submit</button>
  <button class="btn mt-1 mb-1" @click="showAddsuiteForm = false">Cancel</button>
</div>
</div>

<table class="table suites-table ">
<thead>
  <tr>
    <th>Suite</th>
    <th>ID</th>
    <th>Suite Name</th>
    <th>Suite Number</th>
    <th>Suite Type</th>
    <th>Max Occupancy</th>
    <th>Description</th>
    <th>Price per night</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  <tr v-for="suite in suites" :key="suite.id">
    <td> <img :src="suite.img_url" alt="suite"></td>
    <td>{{ suite.suite_id }}</td>
    <td>{{ suite.suite_name }}</td>
    <td>{{ suite.suite_number }}</td>
    <td>{{ suite.suite_type}}</td>
    <td>{{ suite.max_occupancy }}</td>
    <td>{{ suite.description}}</td>
    <td>{{ suite.price_per_night }} EUR</td>
    <td>
      <button class="btn mt-1 mb-1" @click="openUpdateSuiteModal(suite)">Update</button>
      <button class="btn mt-1 mb-1" @click="deleteSuite(suite.suite_id)">Delete</button>
    </td>
  </tr>
</tbody>
</table>

<!-- Update suite Modal -->
<div v-if="showUpdateSuiteModal" class="modal-overlay">
<div class="modal-content">
  <h3>Update suite</h3>
  <input v-model="currentSuite.img_url" type="text" placeholder="suite URL">
  <input v-model="currentSuite.suite_name" type="text" placeholder="suite Name">
  <input v-model="currentSuite.suite_number" type="text" placeholder="suite Number">
  <input v-model="currentSuite.max_occupancy" type="text" placeholder="Max Occupancy">
  <input v-model="currentSuite.description" type="text" placeholder="Description">
  <input v-model="currentSuite.suite_type" type="text" placeholder="Suite Type">
  <input v-model="currentSuite.price_per_night" type="text" placeholder="Price per Night">
  <button class="btn mt-1 mb-1" @click="updateSuite(currentSuite)">Save changes</button>
  <button class="btn mt-1 mb-1" @click="closeUpdateSuiteModal">Cancel</button>
</div>
</div>
</section>
</div>
</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import Spinner from '@/components/Spinner.vue'

export default {
name: 'AdminTable',
// components: {
//   Spinner
// },

data() {
return {
showAddUserForm: false,
showAddsuiteForm: false,
showUpdateUserModal: false,
showUpdateSuiteModal: false,
newUser: {
first_name: '',
last_name: '',
email: '',
password: '',
phone_number: ''
},
newSuite: {
img_url: '',
suite_name: '',
suite_number: '',
suite_type: '',
max_occupancy: '',
description: '',
price_per_night: ''
},
currentUser: {},
currentSuite: {}
};
},
computed: {
...mapState(['users', 'suites'])
},
methods: {
...mapActions(['fetchUsers', 'fetchSuites', 'updateUser', 'deleteUser', 'updateSuite', 'deleteSuite']),
openUpdateUserModal(user) {
this.currentUser = { ...user };
this.showUpdateUserModal = true;
},
closeUpdateUserModal() {
this.showUpdateUserModal = false;
},
updateUser() {
this.$store.dispatch('updateUser', { ...this.currentUser, user_id: this.currentUser.user_id }).then(() => {
  this.showUpdateUserModal = false;
});
},
deleteUser(user_id) {
if (confirm('Are you sure you want to delete this user?')) {
  this.$store.dispatch('deleteUser', user_id).then(() => {
    this.fetchUsers();
  });
}
},
openUpdateSuiteModal(suite) {
this.currentSuite = { ...suite };
this.showUpdateSuiteModal = true;
},
closeUpdateSuiteModal() {
this.showUpdateSuiteModal = false;
},
updateSuite() {
this.$store.dispatch('updateSuite', { ...this.currentSuite, suite_id: this.currentSuite.suite_id }).then(() => {
  this.showUpdateSuiteModal = false;
});
},
deleteSuite(suite_id) {
if (confirm('Are you sure you want to delete this suite?')) {
  this.$store.dispatch('deleteSuite', suite_id).then(() => {
    this.fetchSuites();
  });
}
},
addUser() {
if (this.newUser.first_name && this.newUser.last_name && this.newUser.email && this.newUser.password && this.newUser.phone_number) {
  this.$store.dispatch('register', this.newUser).then(() => {
    this.showAddUserForm = false;
    this.newUser = {first_name: '', last_name: '', email: '', password: '', phone_number: '' };
  });
} else {
  alert('Please fill in all fields.');
}
},
addsuite() {
if (this.newSuite.img_url && this.newSuite.suite_name && this.newSuite.suite_number && this.newSuite.suite_type && this.newSuite.max_occupancy && this.newSuite.description&& this.newSuite.price_per_night ) {
  this.$store.dispatch('addsuite', this.newSuite).then(() => {
    this.showAddsuiteForm = false;
    this.newSuite = { img_url: '', suite_name: '', suite_number: '', suite_type: '', max_occupancy: '', description: '', price_per_night: ''};
  });
} else {
  alert('Please fill in all fields.');
}
}
},
mounted() {
this.fetchUsers();
this.fetchSuites();
}
}

</script>

<style scoped>

.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-pixabay-210249.jpg?raw=true)
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

.heading {
  margin-top: 2rem;
  color: var(--primary-light);
}

.sub-heading {
  color: var(--primary-light);
}

.content {
  color: #000;
}

table img {
aspect-ratio: 1;
object-fit: contain;
object-position: center;
width: 3rem;
}


.admin-tables {
margin: 20px;
}

.table {
width: 100% !important;
border-collapse: collapse;
margin-bottom: 20px;
overflow-x: auto; 
margin-left: 0 !important;
margin-right: 0 !important;
}

.table th,
.table td {
border: 1px solid #ddd;
padding: 8px;
text-align: center;
vertical-align: middle; 
}

.table th {
background-color: var(--primary-dark);
color: var(--primary-light);
border: 1px solid #000;
}

.table tr:hover {
background-color: #f5f5f5;
}

table button:first-of-type {
margin-right: 5px;
color: #fff;

}

button:hover {
color: #fff;
}

.add-user-button, .add-suite-button {
margin-bottom: 20px;
padding: 10px;
color: white;
border: none;
cursor: pointer;
border-radius: 5px;
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
margin-top: 0.3rem;
margin-bottom: 0.3rem;
border-radius: 4px 4px 4px 4px;
border: 1px solid rgba(0, 0, 0, 0.3);
}

button:hover,
.sort:hover,
select.form-control:hover {
  background: #000;
}

button:focus {
  background: #000 !important;
}

button {
  color: var(--primary-light);
  background: #000;
  border-radius: 0 !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.suites-table button {
  margin: 0.2rem auto !important;
}


@media (max-width: 1350px) {

.table {
overflow-x: auto;
white-space: nowrap; 
}

.suites-table {
display: block; 
}
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

.admin-section {
margin-top: 15rem !important;
}

}


@media (max-width: 575px) {
.table th,
.table td {
font-size: 0.9rem; 
}

.admin-section {
margin-top: 12rem !important;
}

table button {
width: 3.5rem;
font-size: 0.7rem;
}
}

@media (max-width: 330px) {
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

.admin-section {
margin-top: 9rem !important;
}
}



</style>