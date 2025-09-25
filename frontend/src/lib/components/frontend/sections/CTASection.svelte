<script lang="ts">
  import type { CTASection } from '$lib/types/homepage';
  import Button from '../common/Button.svelte';
  
  export let section: CTASection;
</script>

<section class="py-20 bg-gradient-to-br from-[#006ad5] via-blue-600 to-[#006ad5] relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-white/5 via-transparent to-white/5 rounded-full blur-2xl"></div>
  </div>

  <!-- Grid Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.05] bg-grid-16"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {#if section.subtitle}
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-blue-100 text-sm font-medium mb-6">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
        </svg>
        {section.subtitle}
      </div>
    {/if}

    <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      {section.title}
    </h2>

    <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
      {section.content}
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button 
        variant="secondary" 
        size="lg" 
        href={section.primaryButtonHref}
      >
        {section.primaryButtonText}
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
      
      {#if section.secondaryButtonText && section.secondaryButtonHref}
        <Button 
          variant="primary"
          size="lg" 
          href={section.secondaryButtonHref}
        >
          {section.secondaryButtonText}
        </Button>
      {/if}
    </div>

    <!-- Trust Indicators -->
    <div class="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
      <div class="flex items-center text-blue-100">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Secure Payment
      </div>
      <div class="flex items-center text-blue-100">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        Free Shipping
      </div>
      <div class="flex items-center text-blue-100">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
        </svg>
        30-Day Returns
      </div>
    </div>
  </div>
</section>

<style>
  .bg-grid-16 {
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
    background-size: 16px 16px;
  }
</style>