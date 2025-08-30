<!-- src/routes/+layout.svelte -->

<script>
  import { onMount } from 'svelte';
  import { navigating } from '$app/stores';
  import { browser } from '$app/environment'; // <-- यह महत्वपूर्ण इम्पोर्ट है

  // CSS Imports
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'aos/dist/aos.css';

  // JS Libraries
  import AOS from 'aos';
  
  // हमारे कस्टम कॉम्पोनेंट्स
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Preloader from '$lib/components/Preloader.svelte';

  let loading = true;

  onMount(async () => {
    // Bootstrap JS
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // AOS को इनिशियलाइज़ करें
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
    
    loading = false;
  });
</script>

<!-- 
  यह है हमारा फिक्स:
  हम Preloader को केवल तभी दिखाएंगे जब 'browser' true हो।
  सर्वर पर 'browser' हमेशा false होता है।
-->
{#if browser}
  {#if loading || $navigating}
    <Preloader />
  {/if}
{/if}


<div class="d-flex flex-column min-vh-100">
  <Navbar />
  <main class="flex-grow-1">
    <slot />
  </main>
  <Footer />
</div>