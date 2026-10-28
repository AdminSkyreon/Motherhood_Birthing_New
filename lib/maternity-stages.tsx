import React from "react";

interface Stage {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  desc: string;
  tag: string;
  renderIcon: () => React.JSX.Element;
}

const MATERNITY_STAGES: Stage[] = [
  {
    id: "stage-1",
    num: "Stage 01",
    title: "Pre-Pregnancy Planning",
    shortTitle: "Pre-Pregnancy",
    desc: "Fertility counseling, health screening & nutrition guidance before conception begins.",
    tag: "🌿 Preparation",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg1)" />
        <path d="M20 38 Q18 28 24 23 Q32 17 40 23 Q46 28 44 38 Q42 46 32 50 Q22 46 20 38Z" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="9" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="5.5" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1" />
        <circle cx="32" cy="32" r="2.5" fill="#0057A4" />
        <path d="M28 22 Q28 19 30.5 19 Q32 19 32 20.5 Q32 19 33.5 19 Q36 19 36 22 Q36 25 32 28 Q28 25 28 22Z" fill="#0057A4" opacity="0.85" />
        <defs><radialGradient id="bg1" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  },
  {
    id: "stage-2",
    num: "Stage 02",
    title: "First Trimester",
    shortTitle: "1st Trimester",
    desc: "Early scans, blood tests, heartbeat monitoring & personalised care plans for weeks 1–12.",
    tag: "💖 Weeks 1–12",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg2)" />
        <ellipse cx="32" cy="34" rx="18" ry="20" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M38 26 Q42 30 40 36 Q38 42 32 43 Q26 44 23 40 Q20 36 22 31 Q24 26 29 24 Q34 22 38 26Z" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.3" />
        <circle cx="38" cy="25" r="5.5" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.2" />
        <circle cx="37" cy="24" r="1.2" fill="#0057A4" />
        <path d="M26 33 Q21 32 20 29" stroke="#0057A4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="33" cy="34" r="2" fill="#0057A4" opacity="0.8">
          <animate attributeName="r" values="2;3;2" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <defs><radialGradient id="bg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  },
  {
    id: "stage-3",
    num: "Stage 03",
    title: "Second Trimester",
    shortTitle: "2nd Trimester",
    desc: "Anomaly scans, fetal growth tracking, gestational diabetes screening & antenatal classes.",
    tag: "👶 Weeks 13–26",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg3)" />
        <ellipse cx="32" cy="34" rx="19" ry="21" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1" opacity="0.6" />
        <path d="M40 22 Q46 29 43 38 Q40 46 32 47 Q24 47 21 40 Q18 34 21 27 Q24 20 32 18 Q37 17 40 22Z" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.4" />
        <circle cx="41" cy="21" r="7" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.3" />
        <ellipse cx="40" cy="20" rx="1.3" ry="1" fill="#0057A4" />
        <path d="M41 22 Q42 23 41.5 23.5" stroke="#0057A4" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M28 30 Q22 28 20 24" stroke="#0057A4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="23.5" r="2" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1" />
        <path d="M28 40 Q26 46 30 48" stroke="#0057A4" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="31" cy="48.5" rx="2.5" ry="1.2" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1" />
        <defs><radialGradient id="bg3" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  },
  {
    id: "stage-4",
    num: "Stage 04",
    title: "Third Trimester",
    shortTitle: "3rd Trimester",
    desc: "Birth planning, fetal monitoring, NST tests & delivery readiness with our senior OB team.",
    tag: "🤰 Weeks 27–40",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg4)" />
        <ellipse cx="32" cy="33" rx="20" ry="22" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.2" opacity="0.55" />
        <ellipse cx="32" cy="37" rx="10" ry="13" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.3" />
        <circle cx="32" cy="50" r="8" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.3" />
        <ellipse cx="29.5" cy="50" rx="1.2" ry="1" fill="#0057A4" />
        <ellipse cx="34.5" cy="50" rx="1.2" ry="1" fill="#0057A4" />
        <path d="M30 53 Q32 54.5 34 53" stroke="#0057A4" strokeWidth="1" strokeLinecap="round" />
        <path d="M22 34 Q18 33 19 29" stroke="#0057A4" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M42 34 Q46 33 45 29" stroke="#0057A4" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M24 30 Q22 22 28 18" stroke="#0057A4" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M40 30 Q42 22 36 18" stroke="#0057A4" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M40 49 Q42 50 40 52" stroke="#0057A4" strokeWidth="1" strokeLinecap="round" fill="none" />
        <defs><radialGradient id="bg4" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  },
  {
    id: "stage-5",
    num: "Stage 05",
    title: "Labor & Delivery",
    shortTitle: "Labor",
    desc: "Private labor room, 24/7 specialist support, pain management & expert delivery team on standby.",
    tag: "✨ Birth Day",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg5)" />
        <circle cx="32" cy="32" r="22" fill="rgba(220,242,253,0.45)" />
        <path d="M14 36 Q14 22 32 20 Q50 22 50 36 Q50 52 32 54 Q14 52 14 36Z" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.2" />
        <circle cx="32" cy="26" r="10" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.3" />
        <path d="M27.5 25.5 Q29 24.5 30.5 25.5" stroke="#0057A4" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M33.5 25.5 Q35 24.5 36.5 25.5" stroke="#0057A4" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="32" cy="27.5" rx="1.2" ry="0.8" fill="#0057A4" opacity="0.7" />
        <path d="M29.5 30 Q32 32 34.5 30" stroke="#0057A4" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="18" cy="40" r="4" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.1" />
        <path d="M10 18 L11 16 L12 18 L10 17 L12 17Z" fill="#0057A4" opacity="0.8" />
        <path d="M50 15 L51 13 L52 15 L50 14 L52 14Z" fill="#0057A4" opacity="0.8" />
        <path d="M52 44 L53 42 L54 44 L52 43 L54 43Z" fill="#0057A4" opacity="0.7" />
        <defs><radialGradient id="bg5" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  },
  {
    id: "stage-6",
    num: "Stage 06",
    title: "Newborn & Postpartum",
    shortTitle: "Postpartum",
    desc: "Newborn assessment, NICU readiness, lactation support & postpartum recovery for mother.",
    tag: "🤸 After Birth",
    renderIcon: () => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="url(#bg6)" />
        <path d="M12 52 Q10 40 14 32 Q18 24 26 22 Q34 20 38 26 Q46 30 46 42 Q46 52 38 56 Q24 60 12 52Z" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1" opacity="0.5" />
        <path d="M14 50 Q12 38 18 30" stroke="#0057A4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M50 50 Q52 38 46 30" stroke="#0057A4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="32" cy="42" rx="10" ry="9" fill="#DCF2FD" stroke="#0057A4" strokeWidth="1.3" />
        <circle cx="32" cy="30" r="9" fill="#FFFFFF" stroke="#0057A4" strokeWidth="1.3" />
        <path d="M26 23 Q28 20 32 22" stroke="#0057A4" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M32 22 Q36 20 38 23" stroke="#0057A4" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="28.5" cy="30" rx="1.5" ry="1.8" fill="#0057A4" />
        <ellipse cx="35.5" cy="30" rx="1.5" ry="1.8" fill="#0057A4" />
        <circle cx="29" cy="29.3" r="0.6" fill="#fff" />
        <circle cx="36" cy="29.3" r="0.6" fill="#fff" />
        <path d="M28.5 34 Q32 37 35.5 34" stroke="#0057A4" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="26" cy="33" rx="2.5" ry="1.5" fill="#0057A4" opacity="0.45" />
        <ellipse cx="38" cy="33" rx="2.5" ry="1.5" fill="#0057A4" opacity="0.45" />
        <path d="M29 16 Q29 13.5 31 13.5 Q32 13.5 32 14.5 Q32 13.5 33 13.5 Q35 13.5 35 16 Q35 18.5 32 21 Q29 18.5 29 16Z" fill="#0057A4" opacity="0.85" />
        <defs><radialGradient id="bg6" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#DCF2FD" /></radialGradient></defs>
      </svg>
    )
  }
];

type HospitalStagesInput = {
  completeCareSection: {
    stages: Array<{
      id: string;
      iconKey: string;
      num: string;
      title: string;
      shortTitle: string;
      desc: string;
      tag: string;
    }>;
  };
};

/** Merge JSON stage copy with built-in SVG icons (`iconKey` matches `MATERNITY_STAGES` id). */
export function stagesFromHospital(hospital: HospitalStagesInput): Stage[] {
  return hospital.completeCareSection.stages.map((row) => {
    const key = row.iconKey || row.id;
    const template = MATERNITY_STAGES.find((t) => t.id === key);
    const renderIcon = template?.renderIcon ?? MATERNITY_STAGES[0].renderIcon;
    return {
      id: row.id,
      num: row.num,
      title: row.title,
      shortTitle: row.shortTitle,
      desc: row.desc,
      tag: row.tag,
      renderIcon,
    };
  });
}
