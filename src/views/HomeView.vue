<template>
  <div class="home">
    <div class="video-container">

      <video class="video" autoplay muted preload="auto" loop="loop" playsinline data-poster="/globalassets/hotel-new-york/images/pre-opening-cgis/2021-05-01_20-e-76th_nicholas-venezia_01-copy.jpg?width=1100&amp;height=700&amp;rxy=0.5%2c0.5&amp;rmode=crop&amp;quality=90">
        <source src="/globalassets/corinthia-global/videos/homepage-videos/new-york---final.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>

.video-container {
    position: relative;
}

.video{
    position: absolute;
    width: 100%;
    height: 100%;
}

.video-container:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, transparent 50%, #1F1D19 100%);
}
</style>
