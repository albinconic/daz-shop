<script lang="ts">
  import Button from '../common/Button.svelte';
  
  const scrollToProducts = () => {
    document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-20 left-10 w-72 h-72 bg-[#006ad5]/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-[#006ad5]/5 via-transparent to-[#006ad5]/5 rounded-full blur-2xl"></div>
  </div>

  <!-- Grid Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- Badge -->
    <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#006ad5]/10 border border-[#006ad5]/20 text-[#006ad5] text-sm font-medium mb-8">
      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
      </svg>
      Premium Tech at Affordable Prices
    </div>

    <!-- Main Heading -->
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
      <span class="block">Premium</span>
      <span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#006ad5] to-blue-400">
        Bluetooth
      </span>
      <span class="block">Headphones</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
      Discover affordable Bluetooth headphones and a wide range of modern gadgets. 
      <span class="text-white font-medium">Quality tech made simple.</span>
    </p>

    <!-- Stats -->
    <div class="flex flex-wrap justify-center gap-8 mb-12">
      <div class="text-center">
        <div class="text-3xl font-bold text-white">10K+</div>
        <div class="text-gray-400 text-sm">Happy Customers</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-white">4.8★</div>
        <div class="text-gray-400 text-sm">Average Rating</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-white">500+</div>
        <div class="text-gray-400 text-sm">Products</div>
      </div>
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button variant="primary" size="lg" on:click={scrollToProducts}>
        Shop Now
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
      
      <Button variant="ghost" size="lg" href="#about">
        Learn More
      </Button>
    </div>

    <!-- Featured Brands -->
    <div class="mt-16 opacity-60">
      <p class="text-gray-400 text-sm mb-6">Trusted by leading brands</p>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div class="text-gray-500 font-semibold text-lg">Apple</div>
        <div class="text-gray-500 font-semibold text-lg">Samsung</div>
        <div class="text-gray-500 font-semibold text-lg">Sony</div>
        <div class="text-gray-500 font-semibold text-lg">JBL</div>
        <div class="text-gray-500 font-semibold text-lg">Beats</div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <button 
      on:click={scrollToProducts}
      aria-label="Scroll to products"
      class="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  </div>
</section>

<style>
  .bg-grid-16 {
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
    background-size: 16px 16px;
  }
</style>