<template>
    <div class="content">
      <div class="overlay">
  <div class="container justify-content-center stay pt-5">
    <h1 class="heading pt-5">Make a Reservation</h1>

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
          <p class="category">{{ suite.suite_type }}</p>
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
export default {
  name: "StayView",
  components: {},
};
</script>

<style scoped>

.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-julius-silver-240301-753639.jpg?raw=true) no-repeat center center fixed;
  background-size: cover;
  background-position:top;
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
</style>