import type { Product } from '$lib/types/product';
import type { FAQ, ImageTextSection, CTASection } from '$lib/types/homepage';

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Over-Ear Headphones',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Headphones',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    featured: true,
    discount: 25
  },
  {
    id: '2',
    title: 'Noise-Canceling Bluetooth Earbuds',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: 'Earbuds',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    featured: true,
    discount: 31
  },
  {
    id: '3',
    title: 'Gaming Wireless Headset',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop',
    category: 'Gaming',
    rating: 4.9,
    reviewCount: 2341,
    inStock: true,
    featured: true,
    discount: 20
  },
  {
    id: '4',
    title: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Speakers',
    rating: 4.5,
    reviewCount: 567,
    inStock: true,
    featured: true,
    discount: 20
  },
  {
    id: '5',
    title: 'Smart Fitness Tracker',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    category: 'Wearables',
    rating: 4.7,
    reviewCount: 1089,
    inStock: true,
    featured: true,
    discount: 28
  }
];

export const discountedProducts: Product[] = [
  {
    id: '6',
    title: 'Sport Wireless Earbuds',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    category: 'Earbuds',
    rating: 4.4,
    reviewCount: 423,
    inStock: true,
    discount: 33
  },
  {
    id: '7',
    title: 'USB-C Fast Charging Cable',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.3,
    reviewCount: 234,
    inStock: true,
    discount: 33
  },
  {
    id: '8',
    title: 'Wireless Charging Pad',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 678,
    inStock: true,
    discount: 33
  },
  {
    id: '9',
    title: 'Compact Bluetooth Mouse',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.2,
    reviewCount: 345,
    inStock: true,
    discount: 40
  },
  {
    id: '10',
    title: 'HD Webcam with Microphone',
    price: 69.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
    category: 'Cameras',
    rating: 4.5,
    reviewCount: 456,
    inStock: true,
    discount: 30
  },
  {
    id: '11',
    title: 'Portable Power Bank',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    category: 'Power',
    rating: 4.8,
    reviewCount: 789,
    inStock: true,
    discount: 37
  },
  {
    id: '12',
    title: 'Smart LED Strip Lights',
    price: 34.99,
    originalPrice: 54.99,
    image: 'https://images.unsplash.com/photo-1558002332-b0e8c9e0df20?w=400&h=400&fit=crop',
    category: 'Smart Home',
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    discount: 36
  },
  {
    id: '13',
    title: 'Bluetooth Keyboard',
    price: 79.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 432,
    inStock: true,
    discount: 33
  }
];

export const imageTextSections: ImageTextSection[] = [
  {
    id: 'about-1',
    title: 'Premium Sound Quality',
    subtitle: 'Why Choose Us',
    content: `<p>Experience crystal-clear audio with our premium Bluetooth headphones. Each product is carefully selected and tested to ensure exceptional sound quality, comfort, and durability.</p>
              <p>Our commitment to quality means you get professional-grade audio equipment at prices that won't break the bank. From deep bass to crisp highs, every note comes through perfectly.</p>
              <ul class="mt-4">
                <li>✓ Studio-grade sound quality</li>
                <li>✓ Long-lasting battery life</li>
                <li>✓ Comfortable all-day wear</li>
                <li>✓ Advanced noise cancellation</li>
              </ul>`,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
    imageAlt: 'Premium headphones with excellent sound quality',
    layout: 'image-left',
    buttonText: 'Shop Headphones',
    buttonHref: '/products/headphones'
  },
  {
    id: 'about-2',
    title: 'Modern Gadgets for Modern Life',
    subtitle: 'Innovation',
    content: `<p>Stay ahead of the curve with our carefully curated collection of modern gadgets. From smart home devices to productivity tools, we bring you the latest technology to enhance your daily life.</p>
              <p>Every gadget in our collection is chosen for its innovative features, build quality, and value for money. We believe technology should make life easier, not more complicated.</p>
              <ul class="mt-4">
                <li>✓ Latest technology trends</li>
                <li>✓ User-friendly designs</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Excellent customer support</li>
              </ul>`,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop',
    imageAlt: 'Modern gadgets and technology devices',
    layout: 'image-right',
    buttonText: 'Explore Gadgets',
    buttonHref: '/products/gadgets'
  }
];

export const ctaSection: CTASection = {
  title: 'Ready to Upgrade Your Tech?',
  subtitle: 'Limited Time Offer',
  content: 'Join thousands of satisfied customers who have discovered the perfect balance of quality and affordability. Free shipping on orders over $50!',
  primaryButtonText: 'Shop Now',
  primaryButtonHref: '/products',
  secondaryButtonText: 'View Deals',
  secondaryButtonHref: '/deals'
};

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is your return policy?',
    answer: '<p>We offer a 30-day hassle-free return policy for all products. If you\'re not completely satisfied with your purchase, you can return it for a full refund or exchange within 30 days of delivery.</p><p>Items must be in original condition with all packaging and accessories included.</p>'
  },
  {
    id: '2',
    question: 'Do you offer international shipping?',
    answer: '<p>Yes, we ship worldwide! We offer international shipping to most countries. Shipping costs and delivery times vary by destination.</p><p>During checkout, you\'ll see the available shipping options and costs for your location.</p>'
  },
  {
    id: '3',
    question: 'How long is the warranty on your products?',
    answer: '<p>All our products come with at least a 1-year manufacturer warranty. Some premium products include extended warranties up to 2-3 years.</p><p>Warranty details are clearly listed on each product page. We also provide dedicated customer support for any warranty claims.</p>'
  },
  {
    id: '4',
    question: 'Are your products authentic?',
    answer: '<p>Absolutely! We only sell 100% authentic products directly from authorized manufacturers and distributors. Every product comes with proper documentation and warranty.</p><p>We guarantee the authenticity of all products and will provide a full refund if any product is found to be counterfeit.</p>'
  },
  {
    id: '5',
    question: 'How fast is your shipping?',
    answer: '<p>We offer multiple shipping options:</p><ul><li><strong>Standard Shipping:</strong> 3-7 business days</li><li><strong>Express Shipping:</strong> 1-3 business days</li><li><strong>Overnight Shipping:</strong> Next business day</li></ul><p>Free standard shipping is included on orders over $50.</p>'
  },
  {
    id: '6',
    question: 'Do you have a customer loyalty program?',
    answer: '<p>Yes! Join our VIP program to earn points with every purchase, get exclusive discounts, early access to new products, and special member-only deals.</p><p>Sign up is free and you\'ll start earning rewards immediately with your first purchase.</p>'
  }
];