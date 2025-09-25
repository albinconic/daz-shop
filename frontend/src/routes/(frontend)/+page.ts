import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    seo: {
      title: 'DAZ Shop',
      description: 'Learn more about our products and services.'
    }
  };
};
