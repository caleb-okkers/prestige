<template>
  <div class="home">
    <div class="video-container">
      <video class="video" autoplay muted preload="auto" loop>
        <source
          src="https://github.com/caleb-okkers/vv-royale-assets/raw/main/rome---final-2024.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <section class="intro-section">
      <div class="row">
        <div
          class="welcome-container justify-content-center align-items-center"
        >
          <h1 class="welcome pb-4">Benvenuti A Roma</h1>

          <p>
            Step into the heart of Rome's most iconic street and experience
            unparalleled luxury at Via Veneto Royale. Nestled on the historic
            Via Veneto, our hotel redefines sophistication and elegance, echoing
            the glamour of the 1960s immortalized by Federico Fellini. Here,
            opulence meets tradition, offering a gateway to Rome’s rich cultural
            heritage.
          </p>
          <br>
            <p>From our doorstep, marvel at the artistic splendor of the
            Piazza Barberini and the hauntingly beautiful Capuchin Crypt. Enjoy
            the serenity of Villa Borghese, a lush oasis that blends art,
            history, and nature. At Via Veneto Royale, every moment is a
            celebration of luxury, where refined comfort and style are
            paramount. 
          </p>
          <br>
            <p>Welcome to a world where history, culture, and elegance
            converge—welcome to Via Veneto Royale.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}

/* .welcome-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
} */

.welcome {
  color: #fff;
  font-family: Georgia, "Times New Roman", Times, serif;
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

.intro-section {
  position: relative;
  z-index: 2;
  margin-top: 35rem;
  padding: 20px;
  background-color: var(--primary-dark);
  color: var(--primary-light);
  width: 100vw;
  
}

.welcome-container p {
  width: 75%;
  margin: 0 auto;
}

.welcome-container {
  padding-bottom: 3rem;
}

  @media (max-width: 992px) {
  
  }
  
  
  @media (max-width: 768px) {
  
  }
  
  
  @media (max-width: 575px) {
  
  }
  
  @media (max-width: 330px) {

  .welcome {
  font-size: 2rem !important;
}
  
  }
</style>