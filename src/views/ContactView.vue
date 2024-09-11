<template>
    <div class="overlay">

        <div class="container justify-content-center about pt-5">
            <h1 class="heading pt-5">
                Contact Us
            </h1>
            <div class="video-container">
                <video class="video" autoplay muted preload="auto" loop>
                    <source src="https://github.com/caleb-okkers/vv-royale-assets/raw/main/date.mp4" type="video/mp4">
                </video>
            </div>

            <div class="form-div pb-5 justify-content-center align-items-center">
          <form @submit.prevent="submitForm" class="mt-1">
            <div class="contact-label-div mb-3">
              <label for="name" class="form-label contact-label">Full Name</label>
              <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your full name" name="name" required>
              <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>
            </div>
            <div class="contact-label-div mb-3">
              <label for="email" class="form-label contact-label">Email address</label>
              <input v-model="formData.email" type="email" class="form-control contact-form" id="email" placeholder="name@example.com" name="email" required>
              <span v-if="formErrors.email" class="error">{{ formErrors.email }}</span>
            </div>
            <div class="contact-label-div mb-3">
              <label for="message" class="form-label contact-label">Enquiry</label>
              <textarea v-model="formData.message" class="form-control" id="message" rows="5" placeholder="Enter your message" name="message" required></textarea>
              <span v-if="formErrors.message" class="error">{{ formErrors.message }}</span>
            </div>
            <button type="submit" class="btn custom-submit-button btn-outline-success"><span>Send</span></button>
          </form>
        </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "ContactView",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formErrors: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.formErrors.name = '';
      this.formErrors.email = '';
      this.formErrors.message = '';

      // Validate name
      if (!this.formData.name.trim()) {
        this.formErrors.name = 'Name is required';
      }

      // Validate email
      if (!this.formData.email.trim()) {
        this.formErrors.email = 'Email is required';
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors.email = 'Invalid email format';
      }

      // Validate message
      if (!this.formData.message.trim()) {
        this.formErrors.message = 'Message is required';
      }

      if (!this.formErrors.name && !this.formErrors.email && !this.formErrors.message) {
        this.submitToFormspree();
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    submitToFormspree() {
      const formUrl = 'https://formspree.io/f/mqazjjlz';
      fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        this.clearForm();
        toast.success('Form submitted successfully!', {
          position: 'bottom-center',
          autoClose: 3000,
        });
      })
      .catch(error => {
        console.error('There was a problem with form submission:', error);
        toast.error('There was an error submitting the form. Please try again later.', {
          position: 'bottom-center',
          autoClose: 5000,
        });
      });
    },
    clearForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>

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

.form-div {
  width: 500px;
  height: 450px;
  margin: 0 auto !important;
  
}

.form-control:hover {
box-shadow: none !important;
border: 2px solid var(--primary-dark) !important;
border-radius: 0!important;
}

.form-control:focus {
box-shadow: none !important;
border: 2px solid var(--primary-dark) !important;
border-radius: 0!important;
}

.form-control {
box-shadow: none !important;
border: 2px solid var(--secondary-dark) !important;
border-radius: 0 !important;
}

.custom-submit-button {
  color: #fff;
}

.contact-label {
  color: var(--primary-light);
}

.btn, select {
  background: var(--primary-dark) !important;
  border: 2px var(--primary-dark) !important;
  color: #fff !important;
  border-radius: 0!important;
  width: 100%;
}


button:hover, select:hover {
  color: var(--primary-dark);
  background: #000 !important;
}



@media (max-width: 1150px) {

}


@media (max-width: 992px) {

}


@media (max-width: 775px) {
  .contact-section {
    margin-top: 6rem !important;
    flex-direction: column;
  }

  .form-div {
    width: 60% !important;
    margin: 0 12px;
    padding-left: 0px;
    padding-bottom: 5rem !important;
  }

}


@media (max-width: 575px) {
  .contact-section {
    margin-top: 6rem !important;
    flex-direction: column;
  }

  .form-div {
    width: 80% !important;
    margin: 0 12px;
    padding-left: 0px;
  }

  .btn {
    margin-top: 0.5rem;
    width: 100% !important;
    height: 2.3rem !important;
    font-size: 0.8rem !important;
    text-align: center !important;
    border: 0.2px solid var(--primary-dark) !important;
  }
}

@media (max-width: 330px) {
  .contact-section {
    margin-top: 6rem !important;
    flex-direction: column;
  }

  .form-div {
    width: 80% !important;
    margin: 0 12px;
    padding-left: 0px;
  }


  .btn {
    margin-top: 0.5rem;
    width: 100% !important;
    height: 2.3rem !important;
    font-size: 0.8rem !important;
    text-align: center !important;
    border: 0.2px solid var(--primary-dark) !important;
  }
}
</style>