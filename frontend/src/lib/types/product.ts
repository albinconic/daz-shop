export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  discount?: number;
  featured?: boolean;
}

export interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
  size?: 'sm' | 'md' | 'lg';
}