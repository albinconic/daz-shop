export type OpenGraphMeta = {
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article' | 'product';
  url: string;
};

export type TwitterMeta = {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  image: string;
  url: string;
};

export type SEOConfig = {
  title: string;
  description: string;
  og: OpenGraphMeta;
  twitter: TwitterMeta;
};
