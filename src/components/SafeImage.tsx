import {useState} from 'react';
import {Compass} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#133024] via-[#1C4232] to-[#264D3B] text-[#F6F3EC] p-6 text-center ${className}`}
      >
        <Compass className="w-8 h-8 text-[#C5A059] mb-2" aria-hidden="true" />
        <span className="font-display text-base font-medium tracking-wide">
          {fallbackLabel || 'PARADISE CAB · Sri Lanka'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
