<template>
  <div class="content">
    <div class="overlay">
      <div class="container dine pt-5">
        <h1 class="heading pt-5">Casa Tua</h1>

        <section class="content-section">
          <div class="content-div">
            <div class="image-content">
              <img
                src="https://github.com/caleb-okkers/vv-royale-assets/blob/main/casa-tua-leticia-miki-rafael-balcazar-photo-3---copy.jpg?raw=true"
                alt="Casa Tua image"
              />
            </div>
            <div class="text-content">
              <h2>Meet Casa Tua</h2>
              <p>
                Indulge in a sophisticated yet soulful interpretation of Italian
                cuisine at Casa Tua, the renowned restaurant brand now gracing
                the elegant Via Veneto Royale in Rome. Helmed by Miky & Leticia
                Grendene, Casa Tua has made a name for itself with acclaimed
                establishments in Miami, Aspen, and Paris. At the Via Veneto
                Royale, we are delighted to host Casa Tua's first venture in
                Rome, offering a luxurious public restaurant and bar, as well as
                an exclusive private dining experience in the heart of the
                Eternal City.
              </p>
            </div>
          </div>
        </section>

        <section class="image-full">
          <img
            src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/4264_via-veneto-royale_int_restaurant_draft_02_hj.webp"
            alt="Restaurant image"
          />
        </section>

        <section class="content-section">
          <div class="content-div">
            <div class="image-content">
              <img
                src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/rome-222.webp"
                alt="Casa Tua Rome"
              />
            </div>
            <div class="text-content">
              <h2>"Your Home in Rome"</h2>
              <p>
                The phrase "Casa Tua" translates to "Your Home" in Italian, a
                sentiment we embrace wholeheartedly at Via Veneto Royale. Here,
                we strive to create a warm and inviting atmosphere, reminiscent
                of the comfort of one's own home. Guests can expect an intimate
                dining experience where hospitality and warmth are paramount,
                ensuring that every meal at Casa Tua is as memorable as it is
                delightful.
              </p>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="content-div">
            <div class="text-content">
              <h2>The Culinary Philosophy</h2>
              <p>
                Casa Tua at Via Veneto Royale celebrates the rich and diverse
                flavors of Italian cuisine. Our culinary philosophy is rooted in
                the careful selection of the finest, freshest ingredients and
                the use of traditional cooking techniques. We are dedicated to
                upholding this tradition, bringing the essence of Italy to life
                in every dish, right in the heart of Rome's historic district.
              </p>
            </div>
            <div class="image-content">
              <img
                src="https://raw.githubusercontent.com/caleb-okkers/vv-royale-assets/main/rome-220.jpg"
                alt="Culinary philosophy image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "DineView",
  components: {},
};
</script>

<style scoped>
.content {
  background: url(https://github.com/caleb-okkers/vv-royale-assets/blob/main/pexels-dawid-kochman.png?raw=true) no-repeat center center fixed;
  /* background: #f1f0ee no-repeat center center fixed; */
  /* background: #e2cc9e no-repeat center center fixed; */
  /* background: #dfdacf no-repeat center center fixed; */
  background-size: cover;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  margin: 0 0 !important;
  padding-bottom: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0.7);
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  padding: 0;
  margin: 0 0 !important;
}

.dine {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0;
  padding-top: 5.5rem !important;
  margin: 0 0 !important;

}

.heading {
  text-align: center;
  color: var(--primary-light);
  padding-bottom: 2rem;
  margin-top: 1.5rem;
}

.content-section {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
  margin: 0 4rem;
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
  margin: 0 auto;
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