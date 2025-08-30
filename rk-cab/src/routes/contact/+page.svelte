<!-- src/routes/contact/+page.svelte -->

<script>
  import { TelephoneFill, Whatsapp, GeoAltFill, CheckCircleFill, ExclamationTriangleFill } from 'svelte-bootstrap-icons';
  
  // यह 'form' प्रॉप SvelteKit एक्शन से डेटा प्राप्त करेगा
  export let form;
</script>

<svelte:head>
  <title>Contact Us - RK CAB SERVICES</title>
  <meta name="description" content="Get in touch with RK CAB SERVICES. Call us, message us on WhatsApp, or send us a message through our contact form." />
</svelte:head>

<div class="container my-5">
  <div class="text-center mb-5">
    <h1 class="display-5 fw-bold">Get in Touch</h1>
    <p class="lead text-muted">We'd love to hear from you! Reach out for bookings or any inquiries.</p>
  </div>
  
  <div class="row g-4 justify-content-center">
    <!-- Contact Information and Form Column (अब एक ही कॉलम में) -->
    <div class="col-lg-8">
      <div class="card p-4">
        <div class="row">
          <!-- Contact Information (Left Side) -->
          <div class="col-md-6 mb-4 mb-md-0">
            <h3 class="mb-4">Contact Information</h3>
            
            <div class="d-flex align-items-center mb-3">
              <TelephoneFill size="24" class="me-3 text-primary" />
              <div>
                <strong>Phone:</strong><br/>
                <a href="tel:8160009585">8160009585</a>
              </div>
            </div>

            <div class="d-flex align-items-center mb-3">
              <Whatsapp size="24" class="me-3 text-success" />
              <div>
                <strong>WhatsApp:</strong><br/>
                <a href="https://wa.me/918160009585" target="_blank">8160009585</a>
              </div>
            </div>
            
            <div class="d-flex align-items-start mb-3">
              <GeoAltFill size="24" class="me-3 text-danger" />
              <div>
                <strong>Location:</strong><br/>
                Ahmedabad, Gujarat
              </div>
            </div>
          </div>
          
          <!-- Contact Form (Right Side) -->
          <div class="col-md-6">
            <h3 class="mb-4">Send us a Message</h3>
            <form method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" name="name" required value={form?.name ?? ''}>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" name="email" required value={form?.email ?? ''}>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4" required>{form?.message ?? ''}</textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>

        <!-- सफलता या असफलता का मैसेज दिखाने के लिए (कार्ड के अंदर नीचे) -->
        {#if form?.success}
          <div class="alert alert-success d-flex align-items-center mt-4" role="alert">
            <CheckCircleFill class="me-2" />
            <div>{form.success}</div>
          </div>
        {/if}

        {#if form?.error}
          <div class="alert alert-danger d-flex align-items-center mt-4" role="alert">
            <ExclamationTriangleFill class="me-2" />
            <div>{form.error}</div>
          </div>
        {/if}

      </div>
    </div>
  </div>
</div>