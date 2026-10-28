"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { PATIENT_REVIEWS, REVIEWS_SECTION, type PatientReview } from "@/data/page-content";
import { publicAsset } from "@/lib/public-asset";

function normalizeReviewText(text: string) {
  return text.replace(/\/n/g, "\n").replace(/\\n/g, "\n").trim();
}

function ReviewText({
  text,
  onExpandedChange,
}: {
  text: string;
  onExpandedChange?: (expanded: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const normalizedText = normalizeReviewText(text);

  useLayoutEffect(() => {
    onExpandedChange?.(expanded);
  }, [expanded, onExpandedChange]);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el || expanded) return;

    const measure = () => setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [normalizedText, expanded]);

  const showToggle = isTruncated || expanded;

  return (
    <div className="review-text-wrap">
      <p
        ref={textRef}
        className={`review-text${expanded ? " review-text-expanded" : " review-text-clamped"}`}
      >
        {normalizedText}
      </p>
      {showToggle ? (
        <button
          type="button"
          className="review-read-more"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((value) => !value);
          }}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

function ReviewCard({ review }: { review: PatientReview }) {
  const [textExpanded, setTextExpanded] = useState(false);

  return (
    <div className={`review-card${textExpanded ? " review-card-expanded" : ""}`}>
      <div className="review-top">
        <div>
          <div className="review-name">{review.name}</div>
          {review.meta ? <div className="review-meta">{review.meta}</div> : null}
        </div>
        <div className="review-stars">{review.stars}</div>
      </div>
      <ReviewText text={review.text} onExpandedChange={setTextExpanded} />
    </div>
  );
}

export function ReviewsSection() {
  const { title, google, practo } = REVIEWS_SECTION;

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-head">
        <h2 className="section-title section-title--solid">{title}</h2>
        <div className="review-badges-row">
          <div className="review-platform-badge">
            <div className="rpb-logo">
              <img
                className="rpb-logo-img"
                src={publicAsset("/google-logo.svg")}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <div className="rpb-copy">
              <div className="rpb-score">⭐ {google.rating.toFixed(1)}</div>
              <div className="rpb-label">
                Google · <span className="rpb-count-up">{google.reviewCount.toLocaleString("en-IN")}</span> reviews
              </div>
            </div>
          </div>
          <div className="review-platform-badge">
            <div className="rpb-logo">
              <img
                className="rpb-logo-img"
                src={publicAsset("/practo-p-logo.svg")}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <div className="rpb-copy">
              <div className="rpb-score">⭐ {practo.rating.toFixed(1)}</div>
              <div className="rpb-label">
                Practo · <span className="rpb-count-up">{practo.reviewCount.toLocaleString("en-IN")}</span> reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-marquee">
        <div className="review-row is-marquee">
          {[0, 1].map((setIndex) =>
            PATIENT_REVIEWS.map((review, index) => (
              <ReviewCard key={`${setIndex}-${review.name}-${index}`} review={review} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
