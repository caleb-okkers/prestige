<template>
  <div class="content">
    <div class="overlay">

      <div class="container about pt-5">
        <h1 class="heading pt-5">Casa Tua</h1>
    
        <section class="content-section">
          <div class="content-div">
          <div class="image-content">
            <img src="https://github.com/caleb-okkers/vv-royale-assets/blob/main/casa-tua-leticia-miki-rafael-balcazar-photo-3---copy.jpg?raw=true" alt="Casa Tua image">
          </div>
          <div class="text-content">
            <h2>Meet Casa Tua</h2>
            <p>Prepare to experience a sophisticated yet soulful take on Italian cuisine with renowned restaurant brand, Casa Tua. Curated by Miky & Leticia Grendene and celebrated for its acclaimed establishments in Miami, Aspen and Paris, Casa Tua is making its debut on the Upper East Side. At The Surrey, A Corinthia Hotel, we are proud to showcase Casa Tua's public restaurant and bar, lobby lounge, and its largest private members club to date.</p>
          </div>
          </div>
        </section>
    
        <section class="image-full">
          <img src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/4264_via-veneto-royale_int_restaurant_draft_02_hj.webp" alt="Restaurant image">
        </section>
    
        <section class="content-section">
          <div class="content-div">
            <div class="image-content">
              <img src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/rome-222.webp" alt="Casa Tua Rome">
            </div>
            <div class="text-content">
              <h2>"Your Home"</h2>
              <p>The term "Casa Tua" translates to "Your Home" in Italian, and our goal is to evoke this sentiment by cultivating a cosy and inviting ambiance for our guests. Expect that fabulous feeling of dining in the comfort of one's own home, where warmth and hospitality abound, ensuring a memorable and delightful culinary experience for all who visit.</p>
            </div>
    
          </div>
        </section>
    
        <section class="content-section">
          <div class="content-div">
          <div class="text-content">
            <h2>The Culinary Philosophy</h2>
            <p>Casa Tua proudly presents a menu that pays homage to the varied and exquisite flavours of Italian cuisine. The culinary philosophy revolves around the meticulous selection of premium, fresh ingredients and the application of time-honoured cooking methods. We are committed to upholding this philosophy, serving cherished classics in the heart of the Upper East Side.</p>
          </div>
          <div class="image-content">
            <img src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/rome-220.jpg" alt="Culinary philosophy image">
          </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

  
<script>
  export default {
    name: 'DineView',
    components: {}
  }
</script>

<style scoped>

.content {
  /* background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-vanmalidate-784633.jpg?raw=true) no-repeat center center fixed; */
  background: #F1F0EE no-repeat center center fixed;
  background-size: cover;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  margin: 0 0 !important;

}
.overlay {
  /* background: rgba(0, 0, 0, 0.7); */
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  padding: 0;
  margin: 0 0 !important;
}

.about {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0;
  padding-top: 5.5rem !important;
  margin: 0 0 !important;
}

.heading {
  text-align: center;
  color: var(--primary-dark);
  padding-bottom: 2rem;
}

.content-section {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
  margin: 0 4rem ;
  margin-bottom: 2rem;
  background: var(--primary-light);
}

.content-section:last-of-type {
  margin-bottom: 0rem;
}

.content-div {
  padding: 2rem;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto !;
}



.image-content {
  flex: 1;
}

.text-content {
  flex: 1;
  padding: 1rem;
}

.text-content p {
width: 60%;
margin: 0 auto;
}

.text-content h2 {
  font-family: "Forum", serif;
  font-weight: 400;
  font-style: normal;
}

.image-content img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.image-full {
  margin: 3rem 0;
}

.image-full img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 768px) {
  .content-section {
    flex-direction: column;
  }
  
  .content-section .text-content {
    order: 1;
  }
}

</style>