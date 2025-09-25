export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ImageTextSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
  buttonText?: string;
  buttonHref?: string;
}

export interface CTASection {
  title: string;
  subtitle?: string;
  content: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}