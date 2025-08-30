<!-- src/lib/components/Navbar.svelte -->
<script>
  // SvelteKit के page स्टोर को इम्पोर्ट करें
  import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/logo.png" alt="RK CAB SERVICES Logo" width="120" />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <!-- 
            यहां हम Svelte की class: directive का उपयोग कर रहे हैं।
            अगर $page.url.pathname === '/' है, तो 'active' क्लास लगेगी।
          -->
          <a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={$page.url.pathname === '/services'} href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={$page.url.pathname === '/about'} href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>