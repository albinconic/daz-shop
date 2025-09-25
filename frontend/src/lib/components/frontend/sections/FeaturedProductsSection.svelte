<script lang="ts">
  import { onMount } from 'svelte';
  import { Swiper } from 'swiper';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import type { Product } from '$lib/types/product';
  import ProductCard from '../products/ProductCard.svelte';
  
  export let products: Product[];
  
  let swiperContainer: HTMLElement;
  let swiper: Swiper;
  let prevButton: HTMLElement;
  let nextButton: HTMLElement;
  
  onMount(() => {
    
    // Initialize Swiper
    swiper = new Swiper(swiperContainer, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      loop: false,
      grabCursor: true,
      watchOverflow: true,
    });
    
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  });
</script>

<section id="featured-products" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#006ad5]/10 text-[#006ad5] text-sm font-medium mb-4">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Featured Products
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Best Selling
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#006ad5] to-blue-600">
          Products
        </span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our bestsellers - the most popular products loved by thousands of customers worldwide.
      </p>
    </div>

    <!-- Products Slider -->
    <div class="relative">
      <!-- Custom Navigation Buttons -->
      <button 
        bind:this={prevButton}
        aria-label="Previous products"
        class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-white shadow-lg rounded-full border border-gray-200 text-gray-600 hover:text-[#006ad5] hover:border-[#006ad5] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        bind:this={nextButton}
        aria-label="Next products"
        class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-white shadow-lg rounded-full border border-gray-200 text-gray-600 hover:text-[#006ad5] hover:border-[#006ad5] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Swiper Container -->
      <div bind:this={swiperContainer} class="swiper px-12">
        <div class="swiper-wrapper">
          {#each products as product}
            <div class="swiper-slide">
              <ProductCard {product} />
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Check More Button -->
    <div class="flex justify-end mt-8">
      <a 
        href="/products"
        class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#006ad5] to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-[#0056b3] hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        <span class="mr-3">Check More Products</span>
        <div class="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</section>

