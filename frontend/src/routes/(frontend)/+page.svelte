<script lang="ts">
  import HeroSection from '$lib/components/frontend/sections/HeroSection.svelte';
  import FeaturedProductsSection from '$lib/components/frontend/sections/FeaturedProductsSection.svelte';
  import DiscountedProductsSection from '$lib/components/frontend/sections/DiscountedProductsSection.svelte';
  import ImageTextSection from '$lib/components/frontend/sections/ImageTextSection.svelte';
  import CTASection from '$lib/components/frontend/sections/CTASection.svelte';
  import FAQSection from '$lib/components/frontend/sections/FAQSection.svelte';
  
  import { 
    featuredProducts, 
    discountedProducts, 
    imageTextSections, 
    ctaSection, 
    faqs 
  } from '$lib/data/homepage';
</script>

<svelte:head>
  <title>DAZ Shop - Premium Bluetooth Headphones & Modern Gadgets</title>
  <meta name="description" content="Discover affordable Bluetooth headphones and a wide range of modern gadgets. Quality tech made simple with premium products at unbeatable prices." />
  <meta name="keywords" content="bluetooth headphones, wireless headphones, modern gadgets, tech accessories, affordable electronics" />
</svelte:head>

<!-- Hero Section -->
<HeroSection />

<!-- Featured Products Section -->
<FeaturedProductsSection products={featuredProducts} />

<!-- Discounted Products Section -->
<DiscountedProductsSection products={discountedProducts} />

<!-- Image-Text Sections -->
{#each imageTextSections as section}
  <ImageTextSection {section} />
{/each}

<!-- CTA Section -->
<CTASection section={ctaSection} />

<!-- FAQ Section -->
<FAQSection {faqs} />