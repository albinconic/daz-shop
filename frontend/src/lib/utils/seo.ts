import type { SEOConfig } from "$lib/types/seo";

const seo = ({ title, description }: SEOConfig) => {
  return {
    title,
    description,
    og: {
      title,
      description,
      image: 'https://daz-shop.ba/og-image.png',
      type: 'website',
      url: 'https://daz-shop.ba'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: 'https://daz-shop.ba/twitter-image.png',
      url: 'https://daz-shop.ba'
    }
  };
}

export default seo;