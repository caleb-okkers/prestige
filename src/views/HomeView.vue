<template>
  <div class="home">
    <div class="welcome-container d-flex justify-content-center align-items-center">
      <h1 class="welcome pb-5">
        Benvenuti A Roma
      </h1>
    </div>
    <div class="video-container">
      <video class="video" autoplay muted preload="auto" loop>
        <source src="https://github.com/caleb-okkers/vv-royale-assets/raw/main/rome---final-2024.mp4" type="video/mp4">
      </video>
    </div>

     <section class="premium-suites-section">

      <div class="row">
        <h5 class="heading">Premium Suites</h5>
      </div>
      <div
          class="row gap-2 justify-content-center suites-div"
          v-if="premiumSuites"
        >
          <CardComp v-for="suite in premiumSuites" :key="suite.suite_id">
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
    <Spinner/> 
  </div>
</section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  computed: {
    premiumSuites() {
      return this.$store.state.premiumSuites
    }
  },
  mounted() {
    this.$store.dispatch('premiumSuites')
  }
}
</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; 
}

.welcome-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.welcome {
  color: #fff;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 5rem;
  font-family: "Instrument Serif", serif;
  font-weight: 400;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transform: translate(-50%, -50%);
}

.video-container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.premium-suites-section {
  position: relative;
  z-index: 2; 
  margin-top: 40rem; 
  padding: 20px;
  background-color: var(--primary-dark); 
  color: var(--primary-light);
  width: 100vw;
}

</style>