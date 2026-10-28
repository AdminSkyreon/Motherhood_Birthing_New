"use client";

import { useState } from "react";

import { CompleteCare } from "@/components/CompleteCare";
import { ReviewsSection } from "@/components/ReviewsSection";

import {
  CITIES,
  DOCTORS,
  EXCLUSIONS,
  FACILITIES,
  type FacilityItem,
  FAQS,
  INCLUSIONS,
  LANGUAGES,
  PHONE_DISPLAY,
  PHONE_TEL,
  STAY_NOTES,
  type Doctor,
} from "@/data/page-content";

const INDIAN_MOBILE = /^[6-9]\d{9}$/;

function normalizePhone(raw: string) {
  return raw.replace(/\D/g, "").slice(-10);
}

function formatPhoneInput(raw: string) {
  const hasPlus = raw.trimStart().startsWith("+");
  const digits = raw.replace(/\D/g, "").slice(0, 15);
  return hasPlus ? `+${digits}` : digits;
}

function roleText(doc: Doctor) {
  return [...doc.qualifications, doc.specialty].join(", ");
}

function webpUrl(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, ".webp");
}

function focusBooking() {
  const field = document.querySelector<HTMLElement>("#booking .name-field");
  const input = document.getElementById("booking-name");
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" });
  if (input instanceof HTMLInputElement) input.focus({ preventScroll: true });
  field?.classList.add("name-field-highlight");
  window.setTimeout(() => field?.classList.remove("name-field-highlight"), 1800);
}

function CityChips({ cities }: { cities: string[] }) {
  return (
    <div className="network-city-grid">
      {cities.map((city) => (
        <div key={city} className="network-city-chip">
          <span className="network-city-pin" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path
                d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="10" r="2.5" fill="currentColor" />
            </svg>
          </span>
          {city}
        </div>
      ))}
    </div>
  );
}

function FacilityIcon({ icon }: { icon: FacilityItem["icon"] }) {
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none" as const,
  };

  switch (icon) {
    case "emergency":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" {...stroke} />
          <path d="M12 8v8M8 12h8" {...stroke} />
        </svg>
      );
    case "ldr":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 10h14v9H5z" {...stroke} />
          <path d="M3 19h18M9 10V7a3 3 0 0 1 6 0v3" {...stroke} />
        </svg>
      );
    case "nicu":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 18h12l-1-9H7l-1 9Z" {...stroke} />
          <circle cx="12" cy="11" r="2.5" {...stroke} />
          <path d="M9 6h6" {...stroke} />
        </svg>
      );
    case "picu":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12h3l2-3 3 6 2-3h6" {...stroke} />
        </svg>
      );
    case "anesthesia":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4v8l4 2 4-2V4" {...stroke} />
          <path d="M12 14v6M9 20h6" {...stroke} />
        </svg>
      );
    case "imaging":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="2" {...stroke} />
          <path d="M8 14c1-2 2-3 4-3s3 1 4 3" {...stroke} />
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 20c4-3.3 7-6 7-10a4 4 0 0 0-7-2.5A4 4 0 0 0 5 10c0 4 3 6.7 7 10Z"
            {...stroke}
          />
        </svg>
      );
    case "paediatric":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="7.5" r="2.5" {...stroke} />
          <path d="M7 19c0-2.8 2.2-5 5-5s5 2.2 5 5" {...stroke} />
        </svg>
      );
    case "newborn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="10" r="4" {...stroke} />
          <path d="M8 18c.5-2.2 2.2-3.5 4-3.5s3.5 1.3 4 3.5" {...stroke} />
        </svg>
      );
    case "pharmacy":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4h8l2 4v12H6V8l2-4Z" {...stroke} />
          <path d="M12 11v6M9 14h6" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

function DoctorCard({
  doc,
  paused,
  duplicate,
  onToggle,
  onBook,
}: {
  doc: Doctor;
  paused: boolean;
  duplicate: boolean;
  onToggle: () => void;
  onBook: () => void;
}) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photo = `/doctors/pan-india/${doc.photoSrc}`;

  return (
    <article
      className={`doctor-card${paused ? " doctor-card-paused" : ""}`}
      data-doctor-id={doc.doctorId}
      onClick={onToggle}
      aria-hidden={duplicate ? true : undefined}
      aria-expanded={paused}
      title={paused ? undefined : "Tap to see full details"}
    >
      <div className="doctor-photo">
        {photoFailed ? (
          <div className="doctor-avatar" style={{ backgroundColor: "#0057A4" }}>
            {doc.initials}
          </div>
        ) : (
          <picture>
            <source srcSet={webpUrl(photo)} type="image/webp" />
            <img
              src={photo}
              alt={doc.name}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              onError={() => setPhotoFailed(true)}
            />
          </picture>
        )}
      </div>
      <div className="doctor-card-content">
        <div className="doctor-card-body">
          <h3 className="doctor-name">{doc.name}</h3>
          <div className="doctor-experience-slot">
            <p className="doctor-experience">{doc.experience}</p>
          </div>
          <div className="doctor-role-slot">
            <p className="doctor-role-text" title={roleText(doc)}>
              {roleText(doc)}
            </p>
          </div>
        </div>
        <div className="doctor-card-spacer" aria-hidden="true" />
        <div className="doctor-card-footer">
          <div className="doctor-location-slot">
            <div className="doctor-location">
              <span aria-hidden="true">📍 </span>
              {doc.location}
            </div>
          </div>
          <button
            type="button"
            className="doctor-btn"
            onClick={(event) => {
              event.stopPropagation();
              onBook();
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BirthingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [showExclusions, setShowExclusions] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pausedDoctorId, setPausedDoctorId] = useState<string | null>(null);

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = { name: "", phone: "" };
    if (!name.trim()) nextErrors.name = "Full name is required.";
    if (!phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!INDIAN_MOBILE.test(normalizePhone(phone))) {
      nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) return;

    setSubmitting(true);
    window.setTimeout(() => {
      const stamp = Math.random().toString(36).slice(2, 8).toUpperCase();
      setRequestId(`MH-${stamp}`);
      setName("");
      setPhone("");
      setLanguage("");
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className="hospital-page min-h-full flex flex-col" data-hospital="pan-india">
      <header>
        <nav aria-label="Primary">
          <a href="#home" className="logo-wrap">
            <picture>
              <source srcSet="/motherhood_logo.webp" type="image/webp" />
              <img
                className="logo-img"
                src="/motherhood_logo.png"
                alt="Motherhood Women & Children's Hospital"
                width={280}
                height={72}
              />
            </picture>
          </a>
          <div className="nav-right">
            <a href={`tel:${PHONE_TEL}`} className="nav-phone" aria-label="Call 080-67238949">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.38a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.69-1.69a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  fill="currentColor"
                />
              </svg>
              <span className="nav-phone-text">{PHONE_DISPLAY}</span>
            </a>
            <a href="#booking" className="nav-cta hidden sm:inline-block" onClick={focusBooking}>
              Book Consultation
            </a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-decor" aria-hidden="true">
          <span className="d1" />
          <span className="d2" />
          <span className="d3" />
          <span className="d4" />
        </div>
        <div className="hero-bg">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero_main-mobile.webp" type="image/webp" />
            <source srcSet="/hero_main-desktop.webp" type="image/webp" />
            <img
              src="/hero_main-mobile.webp"
              alt="Expectant mother at a consultation"
              className="hero-img"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div className="hero-top-row">
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-tagline">
              Planning your delivery? Start with the care, not the checklist.
            </h1>
            <p className="hero-sub">
              Motherhood maternity and birthing packages bring your antenatal visits, delivery and newborn care
              together, so you can plan the whole journey in one place.
            </p>
            <button type="button" className="btn-primary hero-callback" onClick={focusBooking}>
              Request a callback
            </button>
          </div>

          <div className="hero-right">
            <div className="hero-right-inner">
              <div className="hero-form-wrap" id="booking">
                {requestId ? (
                  <div className="success-card animate-fadeIn">
                    <div className="success-check-ring">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="form-badge" style={{ marginBottom: "14px" }}>
                      ✦ Consultation Requested
                    </div>
                    <h3 className="form-success-title">Thank You!</h3>
                    <p className="form-success-body">
                      Our Motherhood care team has received your request and will call you shortly to confirm your
                      consultation slot.
                    </p>
                    <hr className="success-divider" />
                    <span className="success-ref">Request ID: {requestId}</span>
                  </div>
                ) : (
                  <>
                    <div className="form-title">Book your consultation</div>
                    <div className="form-sub">
                      Our Motherhood care team will help with packages, doctors & next steps.
                    </div>
                    <form onSubmit={submitForm} className="flex flex-col gap-2">
                      <div className="form-field name-field">
                        <input
                          id="booking-name"
                          type="text"
                          name="name"
                          placeholder="Full name"
                          value={name}
                          autoComplete="name"
                          enterKeyHint="next"
                          className={errors.name ? "form-field-error" : ""}
                          onChange={(event) => {
                            setName(event.target.value);
                            setErrors((prev) => ({ ...prev, name: "" }));
                          }}
                        />
                        {errors.name ? <span className="form-error-text">{errors.name}</span> : null}
                      </div>
                      <div className="form-field">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          maxLength={16}
                          value={phone}
                          className={errors.phone ? "form-field-error" : ""}
                          onChange={(event) => {
                            setPhone(formatPhoneInput(event.target.value));
                            setErrors((prev) => ({ ...prev, phone: "" }));
                          }}
                        />
                        {errors.phone ? <span className="form-error-text">{errors.phone}</span> : null}
                      </div>
                      <div className="form-field">
                        <select
                          name="language"
                          value={language}
                          onChange={(event) => setLanguage(event.target.value)}
                        >
                          <option value="">Select preferred language</option>
                          {LANGUAGES.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" disabled={submitting} className="form-submit">
                        {submitting ? "Booking in progress..." : "Book My Consultation"}
                      </button>
                    </form>
                    <div className="form-help">
                      Your information stays private and is only used for appointment assistance.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky-mobile is-visible" aria-hidden={false}>
        <button type="button" onClick={focusBooking} className="btn-primary">
          Book Now
        </button>
        <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
          Call Now
        </a>
      </div>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">1 Lac+</div>
            <div className="stat-label">Babies</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1000+</div>
            <div className="stat-label">Doctors across the network</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Emergency & labor care</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">NICU</div>
            <div className="stat-label">Advanced newborn support</div>
          </div>
        </div>
      </div>

      <section className="doctors-section" id="doctors">
        <div className="section-inner">
          <h2 className="section-title section-title--solid">Meet Our Expert Maternity Specialists</h2>
        </div>
        <div className="doctors-slider-wrap">
          <div className="doctors-track-outer">
            <div className="doctors-slider is-marquee">
              {[0, 1].map((setIndex) =>
                DOCTORS.map((doc) => (
                  <DoctorCard
                    key={`${setIndex}-${doc.doctorId}`}
                    doc={doc}
                    duplicate={setIndex === 1}
                    paused={pausedDoctorId === doc.doctorId}
                    onToggle={() =>
                      setPausedDoctorId((current) => (current === doc.doctorId ? null : doc.doctorId))
                    }
                    onBook={focusBooking}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <CompleteCare onBook={focusBooking} />

      <section className="care-visit-band" id="care" aria-labelledby="brand-heading">
        <div className="section-inner care-visit-grid">
          <article className="care-visit-panel care-visit-panel--story">
            <p className="care-visit-kicker">Motherhood birthing</p>
            <h2 id="brand-heading" className="care-visit-heading">
              Care is what stays
            </h2>
            <p className="care-visit-lead">
              <span className="brand-care">CARE</span>, is staying close from the first scan to the first feed, and
              long after you&apos;re home.
            </p>
            <p className="care-visit-body">
              Birthing packages bring your antenatal visits, delivery and newborn care together under that one idea.
            </p>
          </article>

          <article className="care-visit-panel care-visit-panel--offer" id="first-visit" aria-labelledby="visit-heading">
            <h2 id="visit-heading" className="care-visit-heading">
              Start with a conversation
            </h2>
            <p className="care-visit-lead">
              Your first consultation with a Motherhood obstetrician is at no charge*. Where your doctor advises a
              pregnancy scan at that visit, it is also at no charge*.
            </p>
            <button type="button" className="btn-primary care-visit-cta" onClick={focusBooking}>
              Book my first visit
            </button>
            <p className="care-visit-fine">
              *Applicable at select Motherhood Hospitals for first-time visits. Terms apply.
            </p>
          </article>
        </div>
      </section>

      <section className="package-section" id="packages" aria-labelledby="packages-heading">
        <div className="section-inner">
          <h2 id="packages-heading" className="section-title section-title--solid">
            Packages
          </h2>

          <div className="package-panel">
            <h3>Inclusions</h3>
            <ul className="package-list package-list--inclusions">
              {INCLUSIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="stay-note">
              <h3>Stay</h3>
              {STAY_NOTES.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>

            <div className="package-exclusions" id="package-exclusions" hidden={!showExclusions}>
              {EXCLUSIONS.map((group) => (
                <div className="package-block" key={group.title}>
                  <h3 className={group.centerTitle ? "package-block-title--center" : undefined}>{group.title}</h3>
                  <ul className={`package-list${group.twoColumnList ? " package-list--two-col" : ""}`}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="package-read-more-wrap">
              <button
                type="button"
                className="read-more-btn"
                aria-expanded={showExclusions}
                aria-controls="package-exclusions"
                onClick={() => setShowExclusions((open) => !open)}
              >
                {showExclusions ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="facility-section" id="facilities" aria-labelledby="facilities-heading">
        <div className="section-inner">
          <h2 id="facilities-heading" className="section-title section-title--solid">
            Our facilities
          </h2>
          <div className="facility-grid">
            {FACILITIES.map((item) => (
              <article key={item.label} className="facility-card">
                <span className="facility-icon" aria-hidden="true">
                  <FacilityIcon icon={item.icon} />
                </span>
                <span className="facility-label">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="network-section branches-section" id="network" aria-labelledby="network-heading">
        <div className="section-inner">
          <h2 id="network-heading" className="section-title section-title--solid branches-title">
            Our Network of Care
          </h2>
          <p className="network-lead">Motherhood Hospitals is present in 11 cities.</p>
          <CityChips cities={CITIES} />
        </div>
      </section>

      <ReviewsSection />

      <section className="faq-section" id="faqs" aria-labelledby="faq-heading">
        <div className="section-inner">
          <h2 id="faq-heading" className="section-title section-title--solid">
            FAQs
          </h2>
          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div className={`faq-item${open ? " is-open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {faq.question}
                    <span aria-hidden="true">{open ? "–" : "+"}</span>
                  </button>
                  {open ? <p>{faq.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-disclaimer">
            The information on this page is for general awareness and is not medical advice. Services and inclusions
            vary by hospital and individual clinical need. Please consult a registered medical practitioner.
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Motherhood Hospital-Pan India &middot; Pan India &middot; 080-67238949
          </p>
          <p className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="footer-sep" aria-hidden="true">
              |
            </span>
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
