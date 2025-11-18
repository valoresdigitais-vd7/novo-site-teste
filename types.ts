
export interface Product {
  id: number;
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface NavLink {
    name: string;
    href: string;
}
