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
      <img src="https://github.com/caleb-okkers/classique/blob/main/images/home1.webp" alt="" class="foreground-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
}

.welcome-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.welcome {
  color: #fff;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 4rem;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Sends the video behind the content */
}

.video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire container */
  transform: translate(-50%, -50%);
}

.video-container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensures the gradient overlay is on top of the video */
}

.foreground-image {
  position: relative;
  z-index: 2; /* Keeps the image on top of the video */
}
</style>