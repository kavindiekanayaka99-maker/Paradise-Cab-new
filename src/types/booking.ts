import {VehicleCategory} from '../data/fleet';

export type VehiclePreferenceOption =
  | VehicleCategory
  | 'Not Sure – Please Recommend a Suitable Vehicle';

export interface BookingPrefill {
  vehiclePreference?: VehiclePreferenceOption;
  dropOffLocation?: string;
  pickupLocation?: string;
  additionalRequirements?: string;
  timestamp: number;
}
