import { QuoteRequest, QuoteResult } from '../types';

const SERVICE_MULTIPLIER: Record<QuoteRequest['serviceType'], number> = {
  basic: 1,
  deep: 1.85,
  move: 2.25,
};

const PROPERTY_BASE: Record<QuoteRequest['propertyType'], number> = {
  condo: 95,
  landed: 165,
  office: 140,
};

const ADD_ON_PRICES: Record<string, number> = {
  windows: 55,
  fridge: 45,
  oven: 45,
  laundry: 35,
};

const SERVICE_LABELS: Record<QuoteRequest['serviceType'], string> = {
  basic: 'basic maintenance clean',
  deep: 'deep sparkle clean',
  move: 'move-in / move-out reset',
};

export const calculateDemoQuote = (request: QuoteRequest): QuoteResult => {
  const rooms = Number.isFinite(request.rooms) ? Math.max(1, request.rooms) : 1;
  const bathrooms = Number.isFinite(request.bathrooms) ? Math.max(1, request.bathrooms) : 1;
  const addOnTotal = request.addOns.reduce((total, addOn) => total + (ADD_ON_PRICES[addOn] ?? 0), 0);
  const base = PROPERTY_BASE[request.propertyType] + rooms * 28 + bathrooms * 38;
  const low = Math.round((base * SERVICE_MULTIPLIER[request.serviceType] + addOnTotal) / 10) * 10;
  const high = low + Math.max(60, Math.round(low * 0.22 / 10) * 10);
  const cleaners = high > 520 || request.propertyType === 'landed' ? 3 : 2;
  const durationLow = Math.max(2, Math.round((rooms * 0.55 + bathrooms * 0.65) * SERVICE_MULTIPLIER[request.serviceType]));
  const durationHigh = durationLow + (request.serviceType === 'basic' ? 1 : 2);

  return {
    estimatedPrice: `RM ${low} - RM ${high}`,
    duration: `${durationLow} - ${durationHigh} hours`,
    cleaners,
    recommendation: `For a ${rooms}-room ${request.propertyType}, we recommend our ${SERVICE_LABELS[request.serviceType]} with ${cleaners} trained cleaners for the best balance of speed and detail.`,
    included: [
      'Dusting, vacuuming, mopping and surface sanitising',
      'Kitchen counters, sinks, bathroom fixtures and mirrors',
      request.serviceType === 'basic' ? 'High-touch points and tidy finishing touches' : 'Detailed corners, fans, skirting, stains and built-up grime',
    ],
    tips: [
      'Clear counters before the team arrives to maximise cleaning time.',
      'Tell us your priority rooms on WhatsApp so we can focus the visit.',
      'Book deep cleaning quarterly to keep Cheras dust and humidity under control.',
    ],
  };
};
