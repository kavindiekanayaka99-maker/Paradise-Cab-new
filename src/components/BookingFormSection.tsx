import {FormEvent, useEffect, useMemo, useRef, useState} from 'react';
import {
  AlertCircle,
  Backpack,
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  Luggage,
  MessageCircle,
} from 'lucide-react';
import {buildWhatsAppLink} from '../data/business';
import {BookingPrefill, VehiclePreferenceOption} from '../types/booking';

interface BookingFormSectionProps {
  prefill: BookingPrefill | null;
}

const VEHICLE_OPTIONS: {value: VehiclePreferenceOption; note: string}[] = [
  {value: 'Sedan', note: 'Ideal for 1–3 passengers with standard luggage'},
  {value: 'Hatchback', note: 'Compact choice for light-packing short & day trips'},
  {value: 'Wagon', note: 'Extra rear cargo room for multi-day family tours'},
  {value: 'SUV', note: 'Elevated comfort for highlands & larger luggage'},
  {
    value: 'Not Sure – Please Recommend a Suitable Vehicle',
    note: 'We will match the best vehicle based on your group & bags',
  },
];

const LUGGAGE_COUNTS = Array.from({length: 11}, (_, i) => i);
const PASSENGER_COUNTS = Array.from({length: 15}, (_, i) => i + 1);

interface FormState {
  fullName: string;
  contactNumber: string;
  email: string;
  pickupLocation: string;
  dropOffLocation: string;
  travelDate: string;
  pickupTime: string;
  passengers: string;
  largeSuitcases: string;
  smallSuitcases: string;
  backpacks: string;
  vehiclePreference: VehiclePreferenceOption;
  additionalRequirements: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function BookingFormSection({prefill}: BookingFormSectionProps) {
  const todayDate = useMemo(() => getTodayIsoDate(), []);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormState>({
    fullName: '',
    contactNumber: '',
    email: '',
    pickupLocation: '',
    dropOffLocation: '',
    travelDate: '',
    pickupTime: '',
    passengers: '2',
    largeSuitcases: '1',
    smallSuitcases: '1',
    backpacks: '2',
    vehiclePreference: 'Not Sure – Please Recommend a Suitable Vehicle',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<{
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync quick-action prefills from Services, Fleet, or Destinations
  useEffect(() => {
    if (!prefill) return;
    setForm((prev) => ({
      ...prev,
      vehiclePreference: prefill.vehiclePreference ?? prev.vehiclePreference,
      pickupLocation: prefill.pickupLocation ?? prev.pickupLocation,
      dropOffLocation: prefill.dropOffLocation ?? prev.dropOffLocation,
      additionalRequirements: prefill.additionalRequirements
        ? prev.additionalRequirements.includes(prefill.additionalRequirements)
          ? prev.additionalRequirements
          : prev.additionalRequirements
            ? `${prefill.additionalRequirements}\n${prev.additionalRequirements}`
            : prefill.additionalRequirements
        : prev.additionalRequirements,
    }));
    setSubmittedPayload(null);
  }, [prefill]);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({...prev, [field]: value}));
    if (errors[field]) {
      setErrors((prev) => {
        const next = {...prev};
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const cleanedPhone = form.contactNumber.trim();
    if (!cleanedPhone) {
      nextErrors.contactNumber = 'Please enter your WhatsApp or contact number.';
    } else if (cleanedPhone.replace(/[^0-9+]/g, '').length < 7) {
      nextErrors.contactNumber =
        'Please enter a valid contact number including country code if international.';
    }

    if (form.email.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email.trim())) {
        nextErrors.email = 'Please enter a valid email address, or leave this field blank.';
      }
    }

    if (!form.pickupLocation.trim()) {
      nextErrors.pickupLocation = 'Please enter your pickup location (e.g. Airport or Hotel).';
    }

    if (!form.dropOffLocation.trim()) {
      nextErrors.dropOffLocation = 'Please enter your drop-off location or destination.';
    }

    if (!form.travelDate) {
      nextErrors.travelDate = 'Please select your travel date.';
    }

    if (!form.passengers) {
      nextErrors.passengers = 'Please select the number of passengers.';
    }

    return nextErrors;
  };

  const buildFormattedMessage = (): string => {
    const lines = [
      'PARADISE CAB – NEW BOOKING ENQUIRY',
      '------------------------------------',
      'A. CUSTOMER INFORMATION',
      `Full Name: ${form.fullName.trim()}`,
      `WhatsApp / Contact Number: ${form.contactNumber.trim()}`,
    ];

    if (form.email.trim()) {
      lines.push(`Email Address: ${form.email.trim()}`);
    }

    lines.push(
      '',
      'B. JOURNEY DETAILS',
      `Pickup Location: ${form.pickupLocation.trim()}`,
      `Drop-off Location: ${form.dropOffLocation.trim()}`,
      `Travel Date: ${form.travelDate}`,
      `Pickup Time: ${form.pickupTime ? form.pickupTime : 'Not specified / Flexible'}`,
      `Number of Passengers: ${form.passengers}`,
      '',
      'C. LUGGAGE INFORMATION',
      `Large Suitcases: ${form.largeSuitcases}`,
      `Small Suitcases: ${form.smallSuitcases}`,
      `Backpacks / Hand Luggage: ${form.backpacks}`,
      '',
      'D. VEHICLE PREFERENCE',
      `Preferred Vehicle: ${form.vehiclePreference}`,
      '',
      'E. ADDITIONAL REQUIREMENTS',
      form.additionalRequirements.trim()
        ? form.additionalRequirements.trim()
        : 'None specified'
    );

    return lines.join('\n');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedPayload(null);
      const firstErrorField = Object.keys(validationErrors)[0];
      const target = formRef.current?.querySelector(`[name="${firstErrorField}"]`);
      if (target instanceof HTMLElement) {
        target.focus();
        target.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
      return;
    }

    const message = buildFormattedMessage();
    const whatsappUrl = buildWhatsAppLink(message);
    setSubmittedPayload({message, whatsappUrl});
    setCopied(false);

    // Trigger anchor navigation without window.open or window.alert
    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handleCopyMessage = async () => {
    if (!submittedPayload) return;
    try {
      await navigator.clipboard.writeText(submittedPayload.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const inputBaseClass =
    'w-full rounded-md border bg-white px-4 py-3 text-sm sm:text-base text-[#1E2420] placeholder:text-[#7D857F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#133024]';

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
            Booking Enquiry
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
            style={{textWrap: 'balance'}}
          >
            Tell Us About Your Travel Plans
          </h2>
          <p className="text-base text-[#4C554F] leading-relaxed">
            No account or registration required. Share your route, passenger count, and luggage
            details below to send your enquiry straight to our team on WhatsApp.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#F6F3EC] rounded-2xl border border-[#E6E0D2] p-6 sm:p-10 lg:p-12 space-y-10"
        >
          {/* A. CUSTOMER INFORMATION */}
          <fieldset className="space-y-5">
            <legend className="font-display text-xl sm:text-2xl font-semibold text-[#133024] pb-3 border-b border-[#DFD8C8] w-full">
              A. Customer Information
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label
                  htmlFor="booking-fullName"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  Full Name <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  id="booking-fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  placeholder="e.g., Oliver Bennett"
                  aria-invalid={Boolean(errors.fullName)}
                  className={`${inputBaseClass} ${
                    errors.fullName ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.fullName && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-contactNumber"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  WhatsApp / Contact Number <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  id="booking-contactNumber"
                  name="contactNumber"
                  type="tel"
                  required
                  value={form.contactNumber}
                  onChange={(e) => updateField('contactNumber', e.target.value)}
                  placeholder="e.g., +44 7700 900123 or +94 77..."
                  aria-invalid={Boolean(errors.contactNumber)}
                  className={`${inputBaseClass} ${
                    errors.contactNumber ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.contactNumber && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.contactNumber}</span>
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="booking-email"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  Email Address <span className="font-normal text-[#4C554F]">(Optional)</span>
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="e.g., traveller@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`${inputBaseClass} ${
                    errors.email ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.email && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          {/* B. JOURNEY DETAILS */}
          <fieldset className="space-y-5">
            <legend className="font-display text-xl sm:text-2xl font-semibold text-[#133024] pb-3 border-b border-[#DFD8C8] w-full">
              B. Journey Details
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label
                  htmlFor="booking-pickup"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  Pickup Location <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  id="booking-pickup"
                  name="pickupLocation"
                  type="text"
                  required
                  value={form.pickupLocation}
                  onChange={(e) => updateField('pickupLocation', e.target.value)}
                  placeholder="e.g., Bandaranaike International Airport (CMB)"
                  aria-invalid={Boolean(errors.pickupLocation)}
                  className={`${inputBaseClass} ${
                    errors.pickupLocation ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.pickupLocation && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.pickupLocation}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-dropoff"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  Drop-off Location <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  id="booking-dropoff"
                  name="dropOffLocation"
                  type="text"
                  required
                  value={form.dropOffLocation}
                  onChange={(e) => updateField('dropOffLocation', e.target.value)}
                  placeholder="e.g., Kandy, Ella, Galle, or Multi-day Tour"
                  aria-invalid={Boolean(errors.dropOffLocation)}
                  className={`${inputBaseClass} ${
                    errors.dropOffLocation ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.dropOffLocation && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.dropOffLocation}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-sm font-semibold text-[#133024] mb-2"
                >
                  Travel Date <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  id="booking-date"
                  name="travelDate"
                  type="date"
                  min={todayDate}
                  required
                  value={form.travelDate}
                  onChange={(e) => updateField('travelDate', e.target.value)}
                  aria-invalid={Boolean(errors.travelDate)}
                  className={`${inputBaseClass} tabular-nums ${
                    errors.travelDate ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                  }`}
                />
                {errors.travelDate && (
                  <p
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9E2A2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.travelDate}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-sm font-semibold text-[#133024] mb-2"
                  >
                    Pickup Time <span className="font-normal text-[#4C554F]">(Optional)</span>
                  </label>
                  <input
                    id="booking-time"
                    name="pickupTime"
                    type="time"
                    value={form.pickupTime}
                    onChange={(e) => updateField('pickupTime', e.target.value)}
                    className={`${inputBaseClass} border-[#D4CCB9] tabular-nums`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-passengers"
                    className="block text-sm font-semibold text-[#133024] mb-2"
                  >
                    Passengers <span className="text-[#9E2A2B]">*</span>
                  </label>
                  <select
                    id="booking-passengers"
                    name="passengers"
                    required
                    value={form.passengers}
                    onChange={(e) => updateField('passengers', e.target.value)}
                    aria-invalid={Boolean(errors.passengers)}
                    className={`${inputBaseClass} tabular-nums ${
                      errors.passengers ? 'border-[#9E2A2B]' : 'border-[#D4CCB9]'
                    }`}
                  >
                    {PASSENGER_COUNTS.map((count) => (
                      <option key={count} value={String(count)}>
                        {count} {count === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                    <option value="15+ (Group)">15+ Passengers (Specify in notes)</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          {/* C. LUGGAGE INFORMATION */}
          <fieldset className="bg-white rounded-xl border border-[#DFD8C8] p-5 sm:p-7 space-y-5">
            <legend className="font-display text-xl sm:text-2xl font-semibold text-[#133024] px-2">
              C. Luggage Information
            </legend>
            <p className="text-sm text-[#4C554F]">
              Please select your luggage quantities below so we can ensure comfortable boot space
              and recommend the right vehicle size for your party.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="booking-largeSuitcases"
                  className="flex items-center gap-2 text-sm font-semibold text-[#133024] mb-1.5"
                >
                  <Luggage className="w-4 h-4 text-[#8C6B27]" aria-hidden="true" />
                  <span>Large Suitcases</span>
                </label>
                <p className="text-xs text-[#4C554F] mb-2.5">
                  Full-size check-in bags (approx. 28–32 inch)
                </p>
                <select
                  id="booking-largeSuitcases"
                  name="largeSuitcases"
                  value={form.largeSuitcases}
                  onChange={(e) => updateField('largeSuitcases', e.target.value)}
                  className={`${inputBaseClass} border-[#D4CCB9] tabular-nums`}
                >
                  {LUGGAGE_COUNTS.map((count) => (
                    <option key={count} value={String(count)}>
                      {count} {count === 1 ? 'Large Suitcase' : 'Large Suitcases'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="booking-smallSuitcases"
                  className="flex items-center gap-2 text-sm font-semibold text-[#133024] mb-1.5"
                >
                  <Briefcase className="w-4 h-4 text-[#8C6B27]" aria-hidden="true" />
                  <span>Small Suitcases</span>
                </label>
                <p className="text-xs text-[#4C554F] mb-2.5">
                  Cabin trolleys or carry-on bags (approx. 20–22 inch)
                </p>
                <select
                  id="booking-smallSuitcases"
                  name="smallSuitcases"
                  value={form.smallSuitcases}
                  onChange={(e) => updateField('smallSuitcases', e.target.value)}
                  className={`${inputBaseClass} border-[#D4CCB9] tabular-nums`}
                >
                  {LUGGAGE_COUNTS.map((count) => (
                    <option key={count} value={String(count)}>
                      {count} {count === 1 ? 'Small Suitcase' : 'Small Suitcases'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="booking-backpacks"
                  className="flex items-center gap-2 text-sm font-semibold text-[#133024] mb-1.5"
                >
                  <Backpack className="w-4 h-4 text-[#8C6B27]" aria-hidden="true" />
                  <span>Backpacks / Hand Luggage</span>
                </label>
                <p className="text-xs text-[#4C554F] mb-2.5">
                  Daypacks, laptop bags, or soft personal carry bags
                </p>
                <select
                  id="booking-backpacks"
                  name="backpacks"
                  value={form.backpacks}
                  onChange={(e) => updateField('backpacks', e.target.value)}
                  className={`${inputBaseClass} border-[#D4CCB9] tabular-nums`}
                >
                  {LUGGAGE_COUNTS.map((count) => (
                    <option key={count} value={String(count)}>
                      {count} {count === 1 ? 'Backpack / Hand Bag' : 'Backpacks / Hand Bags'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          {/* D. VEHICLE PREFERENCE */}
          <fieldset className="space-y-4">
            <legend className="font-display text-xl sm:text-2xl font-semibold text-[#133024] pb-3 border-b border-[#DFD8C8] w-full">
              D. Vehicle Preference
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {VEHICLE_OPTIONS.map((option) => {
                const isSelected = form.vehiclePreference === option.value;
                return (
                  <label
                    key={option.value}
                    className={`relative flex flex-col justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      option.value.startsWith('Not Sure') ? 'sm:col-span-2 lg:col-span-2' : ''
                    } ${
                      isSelected
                        ? 'bg-[#133024] text-white border-[#133024]'
                        : 'bg-white text-[#1E2420] border-[#D4CCB9] hover:border-[#133024]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehiclePreference"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => updateField('vehiclePreference', option.value)}
                      className="sr-only"
                    />
                    <span className="font-semibold text-sm sm:text-base mb-1">{option.value}</span>
                    <span
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-[#E7CD96]' : 'text-[#4C554F]'
                      }`}
                    >
                      {option.note}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* E. ADDITIONAL REQUIREMENTS */}
          <fieldset className="space-y-3">
            <legend className="font-display text-xl sm:text-2xl font-semibold text-[#133024] pb-3 border-b border-[#DFD8C8] w-full">
              E. Additional Requirements
            </legend>

            <div className="pt-2">
              <label
                htmlFor="booking-notes"
                className="block text-sm font-medium text-[#4C554F] mb-2"
              >
                Share flight numbers, child seat needs, planned sightseeing stops, or multi-day
                itinerary ideas.
              </label>
              <textarea
                id="booking-notes"
                name="additionalRequirements"
                rows={4}
                value={form.additionalRequirements}
                onChange={(e) => updateField('additionalRequirements', e.target.value)}
                placeholder="Example: Flight UL 504 arriving at 08:30 AM, need 1 child seat, and would like to stop in Pinnawala on the way to Kandy."
                className={`${inputBaseClass} border-[#D4CCB9]`}
              />
            </div>
          </fieldset>

          {/* F. WHATSAPP BOOKING SUBMISSION */}
          <div className="pt-2 space-y-4">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-bold tracking-wide text-[#133024] bg-[#C5A059] hover:bg-[#D5B26E] rounded-lg transition-colors duration-150 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>SEND BOOKING ENQUIRY VIA WHATSAPP</span>
            </button>

            <div className="text-center space-y-1.5 max-w-2xl mx-auto">
              <p className="text-sm font-medium text-[#133024]">
                Your enquiry will be sent directly to our WhatsApp. Our team will contact you to
                discuss your requirements and confirm the arrangements.
              </p>
              <p className="text-xs text-[#4C554F]">
                Please note: Submitting this enquiry does not automatically confirm a reservation.
              </p>
            </div>

            {submittedPayload && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-xl bg-white border border-[#133024]/25 p-6 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#133024] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#133024]">
                      Your WhatsApp Booking Enquiry Is Ready
                    </h3>
                    <p className="text-sm text-[#4C554F] mt-1">
                      If WhatsApp did not open automatically on your device, tap the button below
                      to send your prepared message to PARADISE CAB (+94 77 387 9691).
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={submittedPayload.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#133024] hover:bg-[#1B4332] rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                    <span>Open Message in WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#133024] border border-[#D4CCB9] hover:bg-[#F6F3EC] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#133024]" aria-hidden="true" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#8C6B27]" aria-hidden="true" />
                        <span>Copy Enquiry Text</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
