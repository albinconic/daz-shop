<script lang="ts">
  import type { FAQ } from '$lib/types/homepage';
  
  export let faqs: FAQ[];
  
  let openItems: Set<string> = new Set();
  
  const toggleFAQ = (id: string) => {
    if (openItems.has(id)) {
      openItems.delete(id);
    } else {
      openItems.add(id);
    }
    openItems = openItems; // Trigger reactivity
  };
</script>

<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#006ad5]/10 text-[#006ad5] text-sm font-medium mb-4">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
        FAQ
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Frequently Asked
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#006ad5] to-blue-600">
          Questions
        </span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Got questions? We've got answers. Find everything you need to know about our products and services.
      </p>
    </div>

    <!-- FAQ Items -->
    <div class="space-y-4">
      {#each faqs as faq}
        <div class="border border-gray-200 rounded-2xl overflow-hidden">
          <button
            on:click={() => toggleFAQ(faq.id)}
            class="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none rounded-2xl"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900 pr-8">
                {faq.question}
              </h3>
              <div class="flex-shrink-0">
                <svg 
                  class="w-6 h-6 text-[#006ad5] transition-transform duration-200 {openItems.has(faq.id) ? 'rotate-180' : ''}"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          
          {#if openItems.has(faq.id)}
            <div class="px-8 pb-6 bg-gray-50 border-t border-gray-100">
              <div class="prose prose-gray max-w-none pt-4">
                {@html faq.answer}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Contact CTA -->
    <div class="mt-16 text-center">
      <div class="inline-flex flex-col sm:flex-row items-center justify-center p-8 bg-gradient-to-r from-[#006ad5]/5 to-blue-500/5 rounded-2xl border border-[#006ad5]/10">
        <div class="text-center sm:text-left mb-4 sm:mb-0 sm:mr-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p class="text-gray-600">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        </div>
        <a 
          href="/contact" 
          class="inline-flex items-center px-6 py-3 bg-[#006ad5] text-white font-semibold rounded-full hover:bg-[#0056b3] transition-colors"
        >
          Get in Touch
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>