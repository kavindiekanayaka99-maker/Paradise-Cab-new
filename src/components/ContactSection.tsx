import {Mail, MessageCircle} from 'lucide-react';
import {BUSINESS_INFO, buildWhatsAppLink} from '../data/business';

export function ContactSection() {
  const generalWhatsAppLink = buildWhatsAppLink(
    'Hello PARADISE CAB, I have a question about private transportation in Sri Lanka.'
  );

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#F6F3EC] border-t border-[#E6E0D2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E6E0D2] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
              Contact Us
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
              style={{textWrap: 'balance'}}
            >
              Have Questions? Chat With Us on WhatsApp
            </h2>
            <p className="text-base text-[#4C554F] leading-relaxed mb-7">
              Reach out directly for custom route advice, vehicle recommendations, or quotation
              requests. We are always happy to help you plan smoothly.
            </p>

            <dl className="space-y-3 text-sm sm:text-base">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-semibold text-[#133024] min-w-[96px]">Business</dt>
                <dd className="text-[#4C554F]">{BUSINESS_INFO.name}</dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-semibold text-[#133024] min-w-[96px]">WhatsApp</dt>
                <dd>
                  <a
                    href={generalWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#133024] font-medium hover:text-[#8C6B27] transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-semibold text-[#133024] min-w-[96px]">Email</dt>
                <dd>
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="text-[#133024] font-medium hover:text-[#8C6B27] transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
            <a
              href={generalWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#D5B26E] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.emailHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-[#133024] hover:bg-[#1B4332] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
            >
              <Mail className="w-5 h-5 text-[#C5A059]" aria-hidden="true" />
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
