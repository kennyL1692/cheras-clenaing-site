
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
}

export interface QuoteRequest {
  propertyType: 'condo' | 'landed' | 'office';
  rooms: number;
  bathrooms: number;
  serviceType: 'basic' | 'deep' | 'move';
  areaSize?: number;
}

export interface QuoteResult {
  estimatedPrice: string;
  duration: string;
  recommendation: string;
  tips: string[];
}
