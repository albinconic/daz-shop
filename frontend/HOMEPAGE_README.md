# DAZ Shop - Modern E-Commerce Homepage

A premium, modern, and fully responsive homepage for a Bluetooth headphones and gadgets shop built with SvelteKit and Tailwind CSS.

## 🎯 Features

- **Hero Section**: Eye-catching gradient background with animated elements
- **Featured Products Slider**: Horizontal scrollable product showcase
- **Discounted Products Grid**: 4x2 grid layout for special offers
- **Image-Text Sections**: Two alternating layout sections (image-left/image-right)
- **Call-to-Action Section**: Engaging CTA with trust indicators
- **FAQ Section**: Expandable frequently asked questions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with smooth animations

## 🎨 Design System

### Colors
- **Primary**: #006ad5 (brand blue)
- **Secondary**: Black (#000000)
- **Background**: White/Gray variations
- **Accents**: Blue gradients and subtle shadows

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Clean, readable text with proper line heights

## 🏗 Architecture

### Component Structure
```
src/lib/components/frontend/
├── common/
│   └── Button.svelte              # Reusable button component
├── products/
│   └── ProductCard.svelte         # Product display card
└── sections/
    ├── HeroSection.svelte         # Main hero section
    ├── FeaturedProductsSection.svelte
    ├── DiscountedProductsSection.svelte
    ├── ImageTextSection.svelte    # Reusable image-text layout
    ├── CTASection.svelte          # Call-to-action section
    └── FAQSection.svelte          # FAQ accordion
```

### Types
```
src/lib/types/
├── product.ts                     # Product interface
└── homepage.ts                    # Homepage-specific types
```

### Data Layer
```
src/lib/data/
└── homepage.ts                    # Mock data for all sections
```

## 🛠 Technical Implementation

### Key Technologies
- **SvelteKit**: Full-stack framework
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool

### Component Features
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Lazy loading images, optimized animations
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Reusability**: Modular components with proper prop interfaces

## 📱 Sections Overview

### 1. Hero Section
- Animated gradient background with floating elements
- Brand messaging and value proposition
- Statistics showcase (customers, rating, products)
- Dual CTA buttons (primary and secondary actions)
- Smooth scroll navigation

### 2. Featured Products
- Horizontal scrollable product slider
- Custom scroll controls with proper state management
- Product cards with ratings, prices, and add-to-cart functionality
- "Check More" button aligned to bottom right

### 3. Discounted Products
- 4x2 responsive grid layout (8 products total)
- Discount percentage badges
- Special styling for sale items
- Limited time offer callout

### 4. Image-Text Sections (2 sections)
- **Section 1**: Image left, text right - About sound quality
- **Section 2**: Image right, text left - About modern gadgets
- Consistent styling with decorative elements
- Call-to-action buttons for each section

### 5. Call-to-Action Section
- Full-width blue gradient background
- Trust indicators (secure payment, free shipping, returns)
- Primary and secondary action buttons
- Animated background elements

### 6. FAQ Section
- Accordion-style expandable questions
- Smooth animations for expand/collapse
- Contact CTA at the bottom
- Mobile-optimized layout

## 🎯 Business Context

**Target Market**: Customers looking for affordable, quality Bluetooth headphones and modern gadgets

**Value Proposition**: "Quality tech made simple" - Premium products at accessible prices

**Product Categories**:
- Bluetooth Headphones (Over-ear, In-ear)
- Audio Accessories (Speakers, Microphones)
- Tech Gadgets (Fitness trackers, Charging accessories)
- Smart Home Devices

## 🚀 Getting Started

1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:5173`

## 📦 Mock Data

The homepage includes realistic mock data for:
- 5 featured products with ratings and reviews
- 8 discounted products with original/sale prices
- 2 image-text sections with rich content
- 6 common FAQ items
- Trust indicators and brand statistics

## 🎨 Customization

The design system is easily customizable:
- Brand colors in `tailwind.config.js`
- Component variants in individual Svelte files
- Content and images in `src/lib/data/homepage.ts`
- Typography and spacing via Tailwind utilities

This implementation follows senior-level best practices with proper component architecture, TypeScript integration, accessibility considerations, and modern design patterns.