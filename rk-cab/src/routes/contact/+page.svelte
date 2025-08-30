<!-- src/routes/contact/+page.svelte -->

<script>
  import { onMount } from 'svelte';
  import { TelephoneFill, Whatsapp, GeoAltFill } from 'svelte-bootstrap-icons';
  
  // onMount का उपयोग यह सुनिश्चित करने के लिए है कि मैप केवल क्लाइंट-साइड (ब्राउज़र में) रेंडर हो।
  onMount(async () => {
    // Leaflet को डाइनेमिक रूप से इम्पोर्ट करें
    const L = await import('leaflet');

    const lat = 22.98234;
    const long = 72.645953;

    // मैप को 'map' आईडी वाले div में इनिशियलाइज़ करें
    const map = L.map('map').setView([lat, long], 15); // 15 ज़ूम लेवल है

    // OpenStreetMap टाइल लेयर जोड़ें (यह मैप की टाइल्स को दिखाता है)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // हमारे लोकेशन पर एक मार्कर जोड़ें
    L.marker([lat, long]).addTo(map)
      .bindPopup('<b>RK CAB SERVICES</b><br>Karnavati Enclave, Ahmedabad.')
      .openPopup();
  });
</script>

<svelte:head>
  <title>Contact Us - RK CAB SERVICES</title>
  <meta name="description" content="Get in touch with RK CAB SERVICES. Call us, message us on WhatsApp, or find our address in Ahmedabad." />
  
  <!-- Leaflet की CSS को इम्पोर्ट करें -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
</svelte:head>

<div class="container my-5">
  <div class="text-center mb-5">
    <h1 class="display-5 fw-bold">Get in Touch</h1>
    <p class="lead text-muted">We'd love to hear from you! Reach out for bookings or any inquiries.</p>
  </div>
  
  <div class="row g-4">
    <div class="col-lg-6">
      <div class="card h-100 p-4" style="background-color: #f8f9fa;">
        <h3 class="mb-4">Contact Information</h3>
        <!-- ... (बाकी संपर्क जानकारी वैसी ही रहेगी) ... -->
        <div class="d-flex align-items-center mb-3">
          <TelephoneFill size="24" class="me-3 text-primary" />
          <div>
            <strong>Phone:</strong><br/>
            <a href="tel:9624712994">096247 12994</a>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <Whatsapp size="24" class="me-3 text-success" />
          <div>
            <strong>WhatsApp:</strong><br/>
            <a href="https://wa.me/919624712994" target="_blank">096247 12994</a>
          </div>
        </div>
        <div class="d-flex align-items-start mb-3">
          <GeoAltFill size="24" class="me-3 text-danger" />
          <div>
            <strong>Address:</strong><br/>
            KARNAVATI ENCLAVE, New Maninagar, Ahmedabad, Gujarat 382449
          </div>
        </div>
        
        <!-- Google Map Iframe की जगह अब यह div है -->
        <div class="mt-4 rounded" id="map" style="height: 250px; width: 100%;"></div>
      </div>
    </div>
    
    <div class="col-lg-6">
      <div class="card h-100 p-4">
        <h3 class="mb-4">Send us a Message</h3>
        <div class="text-center p-5 border rounded">
          <p class="lead">Contact Form Coming Soon!</p>
        </div>
      </div>
    </div>
  </div>
</div>