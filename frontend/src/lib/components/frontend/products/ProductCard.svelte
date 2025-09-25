<script lang="ts">
  import type { Product } from '$lib/types/product';
  import Button from '../common/Button.svelte';
  
  export let product: Product;
  export let showDiscount = false;

  $: discountPercentage = product.originalPrice && product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    console.log('Add to cart:', product.id);
  };
</script>

<div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
  <!-- Product Image -->
  <div class="relative overflow-hidden bg-gray-50">
    <img 
      src={product.image} 
      alt={product.title}
      class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
    
    {#if showDiscount && discountPercentage > 0}
      <div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
        -{discountPercentage}%
      </div>
    {/if}

    {#if !product.inStock}
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <span class="bg-white px-4 py-2 rounded-lg font-semibold text-gray-900">Out of Stock</span>
      </div>
    {/if}
  </div>

  <!-- Product Details -->
  <div class="p-6">
    <div class="mb-3">
      <p class="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
      <h3 class="font-bold text-lg text-gray-900 line-clamp-2 leading-tight h-12 flex items-start">
        {product.title}
      </h3>
    </div>

    {#if product.rating && product.reviewCount}
      <div class="flex items-center mb-3">
        <div class="flex items-center">
          {#each Array(5) as _, i}
            <svg 
              class="w-4 h-4 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
        </div>
        <span class="ml-2 text-sm text-gray-600">({product.reviewCount})</span>
      </div>
    {/if}

    <!-- Price -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-gray-900">${product.price}</span>
        {#if product.originalPrice && product.originalPrice > product.price}
          <span class="text-lg text-gray-500 line-through">${product.originalPrice}</span>
        {/if}
      </div>
    </div>

    <!-- Add to Cart Button -->
    <Button 
      variant="primary" 
      fullWidth 
      disabled={!product.inStock}
      on:click={handleAddToCart}
    >
      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
    </Button>
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>