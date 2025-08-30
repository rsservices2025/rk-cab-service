<!-- src/routes/+page.svelte -->

<script>
  // हमारी नई आइकन लाइब्रेरी से आइकन्स इम्पोर्ट करें
  import { CarFrontFill, GeoAltFill, AirplaneFill } from 'svelte-bootstrap-icons';
</script>

<style>
  .hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 8rem 0;
    text-align: center;
  }

  .hero-section h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .hero-section p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 1rem auto;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  }

  .btn-lg {
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 50px;
    transition: transform 0.2s;
  }

  .btn-lg:hover {
    transform: scale(1.05);
  }

  /* सर्विस कार्ड्स के लिए थोड़ी स्टाइल */
  .service-card {
    border: 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
</style>

<!-- हीरो सेक्शन HTML -->
<div class="hero-section">
  <div class="container">
    <h1 class="display-4">Reliable Cab Service in Ahmedabad</h1>
    <p class="lead">
      Your trusted partner for city rides, outstation trips, and round trips. Book your
      ride today for a comfortable and safe journey.
    </p>
    
    <a href="tel:8160009585" class="btn btn-primary btn-lg me-2 mt-3">
      Call Now
    </a>
    <a href="https://wa.me/918160009585" class="btn btn-success btn-lg mt-3" target="_blank">
      WhatsApp Us
    </a>
  </div>
</div>

<!-- Services Section -->
<div class="container my-5 py-5">
  <h2 class="text-center">Our Services</h2>
  <p class="text-center text-muted mb-5">We offer a wide range of services to meet your travel needs.</p>
  
  <div class="row g-4">
    <!-- Service Card 1: Local City Rides -->
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 text-center service-card">
        <div class="card-body p-4">
          <CarFrontFill size="48" class="mb-3 text-primary" />
          <h5 class="card-title">Local City Rides</h5>
          <p class="card-text">
            Need to get around Ahmedabad? We offer quick and reliable cabs for all your
            local travel needs, from shopping trips to daily commutes.
          </p>
        </div>
      </div>
    </div>

    <!-- Service Card 2: Outstation Trips -->
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 text-center service-card">
        <div class="card-body p-4">
          <GeoAltFill size="48" class="mb-3 text-primary" />
          <h5 class="card-title">Outstation Trips</h5>
          <p class="card-text">
            Planning a trip outside the city? We provide comfortable and safe cabs for
            one-way journeys and round trips to your favorite destinations.
          </p>
        </div>
      </div>
    </div>

    <!-- Service Card 3: Airport Transfers -->
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 text-center service-card">
        <div class="card-body p-4">
          <AirplaneFill size="48" class="mb-3 text-primary" />
          <h5 class="card-title">Airport Transfers</h5>
          <p class="card-text">
            Hassle-free pickups and drops to Sardar Vallabhbhai Patel International
            Airport. Start or end your journey on a relaxed note.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>