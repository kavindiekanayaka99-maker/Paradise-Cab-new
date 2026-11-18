export interface CustomerReview {
  id: string;
  customerName: string;
  country: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  photoUrl?: string;
}

/**
 * OWNER-EDITABLE VERIFIED CUSTOMER REVIEWS
 * Only add genuine reviews provided by verified PARADISE CAB guests.
 * Example format:
 * {
 *   id: 'review-1',
 *   customerName: 'Verified Guest Name',
 *   country: 'United Kingdom',
 *   review: 'Genuine guest quote here...',
 *   rating: 5,
 *   photoUrl: '/src/assets/images/guest_photo.jpg', // optional
 * }
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [];
