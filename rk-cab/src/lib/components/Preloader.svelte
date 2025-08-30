<!-- src/lib/components/Preloader.svelte -->

<script>
  import { onMount } from 'svelte';

  // LottiePlayer को शुरू में null रखें
  let LottiePlayer = null;

  // onMount केवल ब्राउज़र में चलता है
  onMount(async () => {
    // लाइब्रेरी को केवल क्लाइंट-साइड पर डाइनेमिक रूप से इम्पोर्ट करें
    const module = await import('@lottiefiles/svelte-lottie-player');
    LottiePlayer = module.LottiePlayer;
  });
</script>

<style>
  .preloader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(5px);
  }
</style>

<div class="preloader-overlay">
  <!-- 
    LottiePlayer को केवल तभी रेंडर करें जब यह सफलतापूर्वक इम्पोर्ट हो गया हो।
    यह सुनिश्चित करता है कि सर्वर पर कुछ भी रेंडर करने की कोशिश न हो।
  -->
  {#if LottiePlayer}
    <svelte:component 
      this={LottiePlayer}
      src="/car-preloader.json"  
      autoplay={true}
      loop={true}
      controls={false}
      background="transparent"
      width="250px"
      height="250px"
    />
  {/if}
</div>