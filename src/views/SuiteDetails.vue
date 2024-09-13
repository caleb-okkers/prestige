<template>
    <div class="content">
      <div class="overlay">
        <div class="container justify-content-center stay pt-5">
          <h1 class="heading pt-5" v-if="suite">{{ suite.suite_name }}</h1>
  
          <div
            class="row gap-2 justify-content-center suites-div"
            v-if="suite"
          >
            <CardComp>
              <template #card-header>
                <img
                  :src="suite.img_url"
                  loading="lazy"
                  class="img-fluid"
                  :alt="suite.suite_name"
                />
              </template>
              <template #card-body>
                <!-- <h5 class="card-title">{{ suite.suite_name }}</h5> -->
                <p class="description">{{ suite.description }}</p>
              </template>
              <template #card-footer>
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
    components: {
      CardComp,
      Spinner
    },
    computed: {
      suite() {
        return this.$store.state.suite;
      },
      suite_id() {
        return this.$route.params.id; 
      }
    },
    mounted() {
      this.$store.dispatch('fetchSuite', this.suite_id);
    }
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

  /* @media (max-width: 992px) {
  
  }
  
  
  @media (max-width: 768px) {
  
  }
  
  
  @media (max-width: 575px) {
  
  }
  
  @media (max-width: 300px) {
  
  } */
  
  
  </style>