export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
  duration: string;
  highlight?: string;
}

export interface QuoteRequest {
  propertyType: 'condo' | 'landed' | 'office';
  rooms: number;
  bathrooms: number;
  serviceType: 'basic' | 'deep' | 'move';
  addOns: string[];
}

export interface QuoteResult {
  estimatedPrice: string;
  duration: string;
  cleaners: number;
  recommendation: string;
  included: string[];
  tips: string[];
}
