<script lang="ts">
  import type { Product } from '$lib/types/product';
  import ProductCard from '../products/ProductCard.svelte';
  
  export let products: Product[];
</script>

<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
        </svg>
        Hot Deals
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Limited Time
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Discounts
        </span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Don't miss out on these incredible deals! Premium headphones and gadgets at unbeatable prices.
      </p>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each products.slice(0, 8) as product}
        <ProductCard {product} showDiscount={true} />
      {/each}
    </div>

    <!-- Timer Section -->
    <div class="mt-16 text-center">
      <div class="inline-flex items-center justify-center p-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl text-white">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2">⏰ Sale Ends Soon!</h3>
          <p class="text-red-100">Get these deals before they're gone forever</p>
        </div>
      </div>
    </div>
  </div>
</section>