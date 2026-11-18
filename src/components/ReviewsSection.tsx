import {Mail, MessageCircle, Star, User} from 'lucide-react';
import {BUSINESS_INFO, buildWhatsAppLink} from '../data/business';
import {CUSTOMER_REVIEWS} from '../data/reviews';
import {SafeImage} from './SafeImage';

export function ReviewsSection() {
  const hasReviews = CUSTOMER_REVIEWS.length > 0;
  const feedbackWhatsAppHref = buildWhatsAppLink(
    'Hello PARADISE CAB, I would like to share feedback about my recent journey in Sri Lanka.'
  );

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
            Guest Feedback
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
            style={{textWrap: 'balance'}}
          >
            Customer Reviews &amp; Verified Experiences
          </h2>
          <p className="text-base text-[#4C554F] leading-relaxed">
            PARADISE CAB only displays genuine reviews shared directly by verified guests after
            their journey.
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border border-[#E6E0D2] p-7 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex items-center gap-1 mb-4"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({length: 5}).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-4 h-4 ${
                          starIdx < item.rating
                            ? 'text-[#C5A059] fill-[#C5A059]'
                            : 'text-[#D8D1C2]'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#1E2420] leading-relaxed mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#ECE6D8]">
                  {item.photoUrl ? (
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-[#F6F3EC] shrink-0">
                      <SafeImage
                        src={item.photoUrl}
                        alt={`${item.customerName} from ${item.country}`}
                        fallbackLabel={item.customerName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#F6F3EC] text-[#133024] flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" aria-hidden="true" />
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-[#133024]">{item.customerName}</p>
                    <p className="text-xs text-[#4C554F]">{item.country}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#E6E0D2] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-semibold text-[#133024] mb-3">
                Travelled With PARADISE CAB Recently?
              </h3>
              <p className="text-sm sm:text-base text-[#4C554F] leading-relaxed">
                We believe in complete honesty and never publish invented testimonials or synthetic
                ratings. Verified guest reviews provided by our travellers are added here directly
                as they arrive. If you have completed a trip with us, we would love to hear about
                your experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={feedbackWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#133024] hover:bg-[#1B4332] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                <span>Share Feedback on WhatsApp</span>
              </a>
              <a
                href={`${BUSINESS_INFO.emailHref}?subject=${encodeURIComponent(
                  'Guest Review for PARADISE CAB'
                )}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#133024] border border-[#D4CCB9] hover:border-[#133024] hover:bg-[#F6F3EC] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
              >
                <Mail className="w-4 h-4 text-[#8C6B27]" aria-hidden="true" />
                <span>Email Your Review</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
