<script lang="ts">
  import type { ImageTextSection } from '$lib/types/homepage';
  import Button from '../common/Button.svelte';
  
  export let section: ImageTextSection;
</script>

<section class="py-20 {section.layout === 'image-left' ? 'bg-white' : 'bg-gray-50'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {#if section.layout === 'image-left'}
        <!-- Image Left -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={section.image} 
              alt={section.imageAlt}
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#006ad5]/20 rounded-full blur-xl"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>

        <!-- Content Right -->
        <div class="space-y-6">
          {#if section.subtitle}
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#006ad5]/10 text-[#006ad5] text-sm font-medium">
              {section.subtitle}
            </div>
          {/if}
          
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {section.title}
          </h2>
          
          <div class="prose prose-lg text-gray-600">
            {@html section.content}
          </div>
          
          {#if section.buttonText && section.buttonHref}
            <div class="pt-4">
              <Button variant="primary" size="lg" href={section.buttonHref}>
                {section.buttonText}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          {/if}
        </div>
      {:else}
        <!-- Content Left -->
        <div class="space-y-6 lg:order-2">
          {#if section.subtitle}
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#006ad5]/10 text-[#006ad5] text-sm font-medium">
              {section.subtitle}
            </div>
          {/if}
          
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {section.title}
          </h2>
          
          <div class="prose prose-lg text-gray-600">
            {@html section.content}
          </div>
          
          {#if section.buttonText && section.buttonHref}
            <div class="pt-4">
              <Button variant="primary" size="lg" href={section.buttonHref}>
                {section.buttonText}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          {/if}
        </div>

        <!-- Image Right -->
        <div class="relative lg:order-1">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={section.image} 
              alt={section.imageAlt}
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#006ad5]/20 rounded-full blur-xl"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>
      {/if}
      
    </div>
  </div>
</section>