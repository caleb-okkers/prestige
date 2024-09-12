<template>
  <div class="content">
    <div class="overlay">
      <div class="container justify-content-center stay pt-5">
        <h1 class="heading pt-5">Make a Reservation</h1>

        <div class="row filter-div mx-auto d-flex justify-content-center pt-4 pb-4">
        <form role="search" class="w-25 h-100 search-form">
          <input
          class="form-control search w-100 h-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
          />
        </form>
        <button
        class="btn sort"
        type="button"
        id="sort"
        @click="toggleSort"
        >
        Price per night: {{ sortAscending ? 'lowest' : 'highest' }}
      </button>
      

      <select
            class="form-control w-50 ms-2"
            v-model="selectedSuiteType"
          >
            <option value="">All Suite Types</option>
            <option v-for="suite_type in suiteTypes" :key="suite_type" :value="suite_type">
              {{ suite_type }}
            </option>
      </select>
    </div>

        <div
          class="row gap-2 justify-content-center suites-div"
          v-if="suites && suites.length"
        >
          <CardComp v-for="suite in suites" :key="suite.suite_id">
            <template #card-header>
              <img
                :src="suite.img_url"
                loading="lazy"
                class="img-fluid"
                :alt="suite.suite_name"
              />
            </template>
            <template #card-body>
              <h5 class="card-title">{{ suite.suite_name }}</h5>
            </template>
            <template #card-footer>
              <div class="button-wrapper d-md-flex d-block justify-content-center">
                <router-link
                  :to="{ name: 'suite', params: { id: suite.suite_id } }"
                >
                  <button class="btn btn-success">Details</button>
                </router-link>
              </div>
              <p class="lead pt-2">{{ suite.price_per_night }} EUR</p>
              <p class="suite-type">{{ suite.suite_type }}</p>
            </template>
          </CardComp>
        </div>
        <div v-else>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/Card.vue'
  import Spinner from '@/components/Spinner.vue'

export default {
  name: "StayView",
  components: {
    CardComp,
    Spinner
  },
  data() {
    return {
      searchQuery: '',
      sortAscending: true,
      selectedSuiteType: '',
      suiteTypes: [], 
    };
  },

  computed: {
  suites() {
    let filteredSuites = this.$store.state.suites || [];

    if (!filteredSuites.length) {
      return [];
    }

    if (this.searchQuery) {
      filteredSuites = filteredSuites.filter(suite =>
        suite.suite_name.toLowerCase().includes(this.searchQuery.toLowerCase()) || suite.suite_type.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.selectedSuiteType && this.selectedSuiteType !== '') {
        filteredSuites = filteredSuites.filter(suite =>
          suite.suite_type === this.selectedSuiteType
        );
    }

    if (this.sortAscending) {
      filteredSuites.sort((a, b) => a.price_per_night - b.price_per_night);
    } else {
      filteredSuites.sort((a, b) => b.price_per_night - a.price_per_night);
    }

    return filteredSuites;
  },
},
  methods: {
    toggleSort() {
      this.sortAscending = !this.sortAscending;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSuites").then(() => {
      // Extract unique suite types from suites
      const suites = this.$store.state.suites || [];
      this.suiteTypes = [...new Set(suites.map(suite => suite.suite_type))];
    });
  },
};
</script>

<style scoped>
.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-julius-silver-240301-753639.jpg?raw=true)
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


/* .filter-div {
  width: 100%;
}

.suites-div {
  width: 80% !important;
  margin: 0 auto;
}

.suites-div img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
} */

button:hover, .sort:hover, select.form-control:hover {
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

.sort {
  color: var(--primary-light);
  background: var(--primary-dark);
  width: 20%;
  border-radius: 0 !important;
}

.form-control:hover {
box-shadow: none !important;
border: 2px solid var(--primary-dark) !important;
border-radius: 0 !important;
}

.form-control:focus {
box-shadow: none !important;
border: 2px solid var(--primary-dark) !important;
border-radius: 0 !important;
}

.form-control {
box-shadow: none !important;
border: 2px solid var(--primary-dark) !important;
border-radius: 0 !important;
}

.suite-type {
  font-size: 0.9rem;
  background: var(--primary-dark);
}


.suite-type {
  font-size: 0.9rem;
  /* color: #777; */
}

select.form-control {
  max-width: 150px; 
  background: var(--primary-dark);
  color: var(--primary-light);
}

.search-form {
  height: 2.5rem !important;
  width: 40% !important;
}

.search {
  height: 100% !important;
}

@media (max-width: 1350px) {

  select.form-control {
  width: 8rem !important; 
  height: 2.6rem !important;
  font-size: 1rem !important;
  border: 0.2px solid var(--primary-dark) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 95% !important;
  height: 2.6rem !important;
  font-size: 1rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 1rem !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 8rem !important;
  height: 2.6rem !important;
  font-size: 1rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}


}

@media (max-width: 992px) {

  select.form-control {
  width: 6.5rem !important; 
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 100% !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.btn {
  margin-top: 0.5rem;
  width: 6.5rem !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}


}


@media (max-width: 768px) {

  select.form-control {
  width: 6.5rem !important; 
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 100% !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.btn {
  margin-top: 0.5rem;
  width: 6.5rem !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}

}


@media (max-width: 575px) {

  .card-title {
    font-size: 1rem;
  }

  select.form-control {
  width: 7rem !important; 
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 23rem !important;
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 7rem !important;
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.btn-success {
  margin-top: 0.5rem;
  width: 100% !important;
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}

}

@media (max-width: 330px) {

  select.form-control {
  width: 5.5rem !important; 
  height: 1.8rem !important;
  font-size: 0.6rem !important;
  border: 0.2px solid var(--primary-dark) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 13rem !important;
  height: 1.8rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.65rem !important;
  border: 0.2px solid var(--primary-dark) !important;
}

.btn {
  margin-top: 0.5rem;
  width: 5.5rem !important;
  height: 1.8rem !important;
  font-size: 0.65rem !important;
  text-align: center !important;
  border: 0.2px solid var(--primary-dark) !important;
}


}

</style>
