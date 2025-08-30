<!-- src/lib/components/Preloader.svelte -->

<script>
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import { onMount } from 'svelte';

  // एक स्टेट वेरिएबल जो यह ट्रैक करेगा कि कॉम्पोनेंट माउंट हुआ है या नहीं
  let isMounted = false;

  // onMount केवल ब्राउज़र में चलता है, जब कॉम्पोनेंट DOM में जुड़ जाता है
  onMount(() => {
    isMounted = true;
  });
</script>

<style>
  .preloader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95); /* थोड़ा और ओपेक बैकग्राउंड */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* यह सुनिश्चित करता है कि यह सबसे ऊपर हो */
    backdrop-filter: blur(5px);
  }
</style>

<div class="preloader-overlay">
  <!-- 
    LottiePlayer को केवल तभी रेंडर करें जब isMounted true हो।
    यह सुनिश्चित करता है कि हम इसे रेंडर करने की कोशिश तभी करें जब सब कुछ तैयार हो।
  -->
  {#if isMounted}
    <LottiePlayer
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