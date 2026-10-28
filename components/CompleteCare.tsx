"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { stagesFromHospital } from "@/lib/maternity-stages";

const COMPLETE_CARE = {
  headingBadge: "Complete Care · Every Stage",
  title: "Complete Care — Every Step of the Way",
  ctaBadges: [
    {
      strong: "One Hospital. Every Stage.",
      span: "No referrals. No handoffs. Just continuous, expert care.",
    },
    {
      strong: "24/7 Expert Support",
      span: "Senior OB & NICU team available at every critical moment.",
    },
  ],
  ctaButtonLabel: "Start Your Journey →",
  stages: [
    {
      id: "stage-1",
      iconKey: "stage-1",
      num: "Stage 01",
      title: "Pre-Pregnancy Planning",
      shortTitle: "Pre-Pregnancy",
      desc: "Fertility counseling, health screening & nutrition guidance before conception begins.",
      tag: "🌿 Preparation",
    },
    {
      id: "stage-2",
      iconKey: "stage-2",
      num: "Stage 02",
      title: "First Trimester",
      shortTitle: "1st Trimester",
      desc: "Early scans, blood tests, heartbeat monitoring & personalised care plans for weeks 1–12.",
      tag: "💖 Weeks 1–12",
    },
    {
      id: "stage-3",
      iconKey: "stage-3",
      num: "Stage 03",
      title: "Second Trimester",
      shortTitle: "2nd Trimester",
      desc: "Anomaly scans, fetal growth tracking, gestational diabetes screening & antenatal classes.",
      tag: "👶 Weeks 13–26",
    },
    {
      id: "stage-4",
      iconKey: "stage-4",
      num: "Stage 04",
      title: "Third Trimester",
      shortTitle: "3rd Trimester",
      desc: "Birth planning, fetal monitoring, NST tests & delivery readiness with our senior OB team.",
      tag: "🤰 Weeks 27–40",
    },
    {
      id: "stage-5",
      iconKey: "stage-5",
      num: "Stage 05",
      title: "Labor & Delivery",
      shortTitle: "Labor",
      desc: "Private labor room, 24/7 specialist support, pain management & expert delivery team on standby.",
      tag: "✨ Birth Day",
    },
    {
      id: "stage-6",
      iconKey: "stage-6",
      num: "Stage 06",
      title: "Newborn & Postpartum",
      shortTitle: "Postpartum",
      desc: "Newborn assessment, NICU readiness, lactation support & postpartum recovery for mother.",
      tag: "🤸 After Birth",
    },
  ],
};

const stages = stagesFromHospital({ completeCareSection: COMPLETE_CARE });

export function CompleteCare({ onBook }: { onBook: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStageId, setActiveStageId] = useState<string | null>(null);
  const [showFootAccent, setShowFootAccent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!window.matchMedia("(max-width: 900px)").matches) return;

    const markReady = () => section.classList.add("lc-wheel-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        markReady();
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px 10% 0px" }
    );

    observer.observe(section);
    const fallbackTimer = window.setTimeout(markReady, 800);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowFootAccent(true);
        observer.disconnect();
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lifecycle-section"
      id="complete-care"
      style={
        showFootAccent
          ? ({
              ["--complete-care-foot-bg" as string]: 'url("/complete-care-foot-accent.png")',
            } as CSSProperties)
          : undefined
      }
    >
      <div className="section-inner">
        <div className="section-heading-stack">
          <div className="lc-heading-badge">
            <div className="lc-pulse" />
            <span>{COMPLETE_CARE.headingBadge}</span>
          </div>
          <h2 className="section-title section-title--solid">{COMPLETE_CARE.title}</h2>
        </div>

        <div className="lc-track">
          <div className="lc-steps">
            {stages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`lc-step${activeStageId === stage.id ? " lc-step-active" : ""}`}
              >
                <button
                  type="button"
                  className="lc-icon-ring"
                  aria-label={`${stage.title} — show stage details`}
                  aria-pressed={activeStageId === stage.id}
                  onClick={() => setActiveStageId((current) => (current === stage.id ? null : stage.id))}
                >
                  <div className="lc-icon-stack">
                    <div className="lc-orbit-spin" aria-hidden="true">
                      <span className="lc-orbit-dot" />
                    </div>
                    <div className="lc-baby-circle">{stage.renderIcon()}</div>
                  </div>
                </button>
                <div className="lc-connector-dot" />
                <div className={`lc-card ${idx % 2 === 1 ? "mt-[48px]" : ""}`}>
                  <div className="lc-step-num">{stage.num}</div>
                  <div className="lc-step-title">
                    <span className="lc-title-desktop">{stage.title}</span>
                    <span className="lc-title-mobile">{stage.shortTitle}</span>
                  </div>
                  <div className="lc-step-desc">{stage.desc}</div>
                  <div className="lc-step-tag">{stage.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lc-cta-strip">
          {COMPLETE_CARE.ctaBadges.map((badge, i) => (
            <div key={badge.strong} className="lc-cta-badge flex items-center gap-3">
              <div className="lc-badge-icon">
                {i === 0 ? (
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 20c4-3.3 7-6 7-10a4 4 0 0 0-7-2.5A4 4 0 0 0 5 10c0 4 3 6.7 7 10Z"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <div className="lc-badge-text text-left">
                <strong>{badge.strong}</strong>
                <span>{badge.span}</span>
              </div>
            </div>
          ))}
          <button type="button" onClick={onBook} className="lc-btn-gold">
            {COMPLETE_CARE.ctaButtonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
