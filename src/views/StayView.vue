<template>
  <div class="container justify-content-center about pt-5">
    <h1 class="heading pt-5">Make a Reservation</h1>

    <div
      class="row gap-2 justify-content-center suites-div"
      v-if="suites && suites.length"
    >
      <CardComp v-for="suite in suites" :key="suite.suite_id">
        <template #card-header>
          <img
            :src="suite.prodUrl"
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
              <button class="btn btn-success">View suite</button>
            </router-link>
          </div>
          <p class="lead pt-2">R{{ suite.amount }}</p>
          <p class="category">{{ suite.category }}</p>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <Spinner />
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
.heading {
  margin-top: 2rem;
  color: var(--primary-dark);
}
</style>