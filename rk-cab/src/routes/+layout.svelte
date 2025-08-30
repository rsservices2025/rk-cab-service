<!-- src/routes/+layout.svelte -->

<script>
  // Bootstrap की CSS को यहां इम्पोर्ट करें ताकि यह हर पेज पर लागू हो
  import 'bootstrap/dist/css/bootstrap.min.css';

  // onMount Svelte का एक लाइफसाइकिल फंक्शन है।
  // यह सुनिश्चित करता है कि Bootstrap की JS केवल ब्राउज़र में चले, सर्वर पर नहीं।
  import { onMount } from 'svelte';
  
  // हमारे कस्टम कॉम्पोनेंट्स को इम्पोर्ट करें
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  onMount(async () => {
    // Bootstrap की जावास्क्रिप्ट (ड्रॉपडाउन, मॉडल आदि के लिए) को इम्पोर्ट करें
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<!-- 
  यह Flexbox रैपर सुनिश्चित करता है कि लेआउट पूरी ऊंचाई ले
  और फुटर हमेशा नीचे रहे, भले ही पेज का कंटेंट कम हो।
-->
<div class="d-flex flex-column min-vh-100">

  <!-- हमारा Navbar कॉम्पोनेंट सबसे ऊपर आएगा -->
  <Navbar />

  <!-- 
    <slot /> आपकी वेबसाइट के हर पेज के कंटेंट को यहां रेंडर करेगा।
    flex-grow-1 क्लास यह सुनिश्चित करती है कि main एरिया उपलब्ध जगह को भर दे,
    जिससे फुटर नीचे की ओर धकेल दिया जाता है।
  -->
  <main class="container py-4 flex-grow-1">
    <slot />
  </main>

  <!-- हमारा Footer कॉम्पोनेंट सबसे नीचे आएगा -->
  <Footer />

</div>

<!-- 
  अब हमें यहां <style> टैग की आवश्यकता नहीं है, क्योंकि Bootstrap की 
  d-flex, flex-column, और min-vh-100 क्लासेस लेआउट को हैंडल कर रही हैं।
-->