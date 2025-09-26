<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let mobileMenuOpen = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };
  
  const closeMobileMenu = () => {
    mobileMenuOpen = false;
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center cursor-pointer">
          <div class="w-10 h-10 bg-gradient-to-r from-[#006ad5] to-blue-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-lg">D</span>
          </div>
          <span class="ml-3 text-xl font-bold text-gray-600}">
            DAZ Shop
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a 
            href="/" 
            class="px-3 py-2 text-sm font-medium cursor-pointer transition-colors {isScrolled ? 'text-gray-900 hover:text-[#006ad5]' : 'hover:text-blue-800'} {$page.url.pathname === '/' ? (isScrolled ? 'text-[#006ad5]' : 'text-blue-800') : ''}"
          >
            Home
          </a>
          
          <button
            on:click={() => scrollToSection('featured-products')}
            class="px-3 py-2 text-sm font-medium cursor-pointer transition-colors {isScrolled ? 'text-gray-900 hover:text-[#006ad5]' : 'hover:text-blue-200'}"
          >
            Shop
          </button>
          
          <button
            on:click={() => scrollToSection('about-1')}
            class="px-3 py-2 text-sm font-medium cursor-pointer transition-colors {isScrolled ? 'text-gray-900 hover:text-[#006ad5]' : 'hover:text-blue-200'}"
          >
            About
          </button>
          
          <a 
            href="/contact" 
            class="px-3 py-2 text-sm font-medium cursor-pointer transition-colors {isScrolled ? 'text-gray-900 hover:text-[#006ad5]' : 'hover:text-blue-200'}"
          >
            Contact
          </a>
        </div>
      </div>

      <!-- CTA Button (Desktop) -->
      <div class="hidden md:block">
        <a 
          href="/products" 
          class="inline-flex items-center px-6 py-2 bg-[#006ad5] text-white text-sm font-medium rounded-full hover:bg-[#0056b3] transition-colors shadow-lg hover:shadow-xl cursor-pointer"
        >
          Shop Now
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          on:click={toggleMobileMenu}
          class="p-2 rounded-md cursor-pointer {isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
        <a 
          href="/" 
          on:click={closeMobileMenu}
          class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#006ad5] hover:bg-gray-50 rounded-md transition-colors cursor-pointer {$page.url.pathname === '/' ? 'text-[#006ad5] bg-blue-50' : ''}"
        >
          Home
        </a>
        
        <button
          on:click={() => scrollToSection('featured-products')}
          class="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-[#006ad5] hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
        >
          Shop
        </button>
        
        <button
          on:click={() => scrollToSection('about-1')}
          class="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-[#006ad5] hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
        >
          About
        </button>
        
        <a 
          href="/contact" 
          on:click={closeMobileMenu}
          class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#006ad5] hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
        >
          Contact
        </a>
        
        <!-- Mobile CTA -->
        <div class="pt-4 pb-2">
          <a 
            href="/products" 
            on:click={closeMobileMenu}
            class="block text-center px-6 py-3 bg-[#006ad5] text-white text-base font-medium rounded-full hover:bg-[#0056b3] transition-colors shadow-lg cursor-pointer"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from going under fixed nav -->
<div class="h-16 lg:h-20"></div>