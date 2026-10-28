export const PHONE_DISPLAY = "080 67238949";
export const PHONE_TEL = "08067238949";

export const LANGUAGES = [
  "English",
  "Hindi",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Tamil",
  "Telugu",
  "Bengali",
  "Gujarati",
  "Punjabi",
];

export const CITIES = [
  "Bangalore",
  "Chandigarh",
  "Chennai",
  "Gurgaon",
  "Indore",
  "Mohali",
  "Mumbai",
  "Mysore",
  "Noida",
  "Pune",
  "Kolkata",
];

export type Doctor = {
  doctorId: string;
  name: string;
  /** Medical council registration number (from Motherhood India doctor profiles). */
  registrationNumber: string;
  experience: string;
  qualifications: string[];
  specialty: string;
  location: string;
  initials: string;
  photoSrc: string;
};

export const DOCTORS: Doctor[] = [
  {
    doctorId: "dr-nagaveni-r",
    name: "Dr. Nagaveni R",
    registrationNumber: "75973",
    experience: "17+ years of experience",
    qualifications: ["MBBS", "DGO", "DNB"],
    specialty: "Consultant Obstetrician & Gynaecologist",
    location: "Kothanur",
    initials: "NR",
    photoSrc: "Dr-Nagaveni-R.jpg",
  },
  {
    doctorId: "dr-aarthi-bharat",
    name: "Dr. aarthi Bharat",
    registrationNumber: "51426",
    experience: "25+ years of experience",
    qualifications: ["MBBS", "DGO"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "Banashankari",
    initials: "AB",
    photoSrc: "Dr-Aarthi-Bharat.png",
  },
  {
    doctorId: "dr-deepmaala",
    name: "Dr. Deepmala",
    registrationNumber: "73299",
    experience: "16+ years of experience",
    qualifications: ["MBBS", "MS"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "Sarjapur",
    initials: "DM",
    photoSrc: "Dr-Deepmala.png",
  },
  {
    doctorId: "dr-suhasini-inamdar",
    name: "Dr. Suhasini Inamdar",
    registrationNumber: "27603",
    experience: "33+ years of experience",
    qualifications: ["MBBS", "MS (OBG)"],
    specialty: "Consultant Obstetrician & Gynaecologist",
    location: "Indiranagar",
    initials: "SI",
    photoSrc: "Dr-Suhasini-Inamdar.jpg",
  },
  {
    doctorId: "dr-sireesha-reddy",
    name: "Dr. Sireesha Reddy",
    registrationNumber: "92902",
    experience: "24+ years of experience",
    qualifications: ["MBBS", "MRCOG", "CCT(UK)", "MD(OBST & GYNAE)"],
    specialty: "Consultant Obstetrician & Gynaecologist",
    location: "Hebbal",
    initials: "SR",
    photoSrc: "Dr.-Sireesha-Reddy.jpg",
  },
  {
    doctorId: "dr-madhavi-reddy",
    name: "Dr. Madhavi Reddy",
    registrationNumber: "84597",
    experience: "16+ years of experience",
    qualifications: ["MBBS", "MS"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "HRBR Layout",
    initials: "MR",
    photoSrc: "Dr-Madhavi-Reddy.jpg",
  },
  {
    doctorId: "dr-padma-srivastava",
    name: "Dr. Padma Srivastava",
    registrationNumber: "2011123455",
    experience: "30+ years of experience",
    qualifications: ["MBBS", "MD(OBG)"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "Lullanagar",
    initials: "PS",
    photoSrc: "Dr-Padma-Srivastava.jpg",
  },
  {
    doctorId: "dr-madhuri-burande-laha",
    name: "Dr. Madhuri Burande Laha",
    registrationNumber: "MMC-87156",
    experience: "29+ years of experience",
    qualifications: ["MBBS", "DGO", "DNB"],
    specialty: "Senior Consultant - Obstetrician & Gynaecologist",
    location: "Pune",
    initials: "ML",
    photoSrc: "Dr-Madhuri-Burande-Laha.jpg",
  },
  {
    doctorId: "dr-surabhi-siddhartha",
    name: "Dr. Surabhi Siddhartha",
    registrationNumber: "2005042591",
    experience: "15+ years of experience",
    qualifications: ["MBBS", "DGO"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "Mumbai",
    initials: "SS",
    photoSrc: "Dr-Surabhi-Siddhartha.jpg",
  },
  {
    doctorId: "dr-asha-baxi",
    name: "Dr. Asha Baxi",
    registrationNumber: "MP-4345",
    experience: "30+ years of experience",
    qualifications: ["MBBS", "FICOG", "FRCOG", "MS"],
    specialty: "Consultant - Obstetrics, Gynaecology & Reproductive Medicine",
    location: "Indore",
    initials: "AB",
    photoSrc: "Dr.-Asha-Baxi.png",
  },
  {
    doctorId: "dr-preeti-maheshwari",
    name: "Dr. Preeti Maheshwari",
    registrationNumber: "MP-8283",
    experience: "15+ years of experience",
    qualifications: ["MBBS", "MS (Gold Medallist)"],
    specialty: "Consultant - Obstetrician and Gynaecologist",
    location: "Rajiv Gandhi Circle",
    initials: "PM",
    photoSrc: "Dr-Preeti-Maheshwari.jpeg",
  },
  {
    doctorId: "dr-sandip-biswas",
    name: "Dr. Sandip Biswas",
    registrationNumber: "56421",
    experience: "17+ years of experience",
    qualifications: ["MBBS", "DGO", "MRCOG", "FRCOG (London)"],
    specialty: "Consultant - Obstetrician & Gynaecologist",
    location: "Kolkata",
    initials: "SB",
    photoSrc: "Dr-Sandip-Biswas.jpg",
  },
  {
    doctorId: "dr-poonam-rudingwa",
    name: "Dr. Poonam Rudingwa",
    registrationNumber: "DMC-R/05083",
    experience: "15+ years of experience",
    qualifications: ["MBBS", "MS (OBG)"],
    specialty: "Consultant - Obstetrics & Gynaecology",
    location: "Chandigarh",
    initials: "PR",
    photoSrc: "Dr-Poonam-Rudingwa.jpg",
  },
];

export const INCLUSIONS = [
  "Room and bed charges: 2 days for normal delivery, 3 days for C-section, counted from admission",
  "Nursing charges from admission to discharge",
  "Labour, delivery and recovery (LDR) room charges: up to 6 hours for normal delivery",
  "Operation theatre charges: up to 1 hour for C-section",
  "Recovery room charges",
  "OBG consultant charges from admission to discharge",
  "Anesthetist charges for C-section",
];

export const STAY_NOTES = [
  "Additional stay beyond the package is charged at actual room rent",
  "The room category may change if the stay extends",
  "Inclusions vary by package and by hospital. Your care team will share the full list for the package you choose.",
];

export type ExclusionGroup = {
  title: string;
  /** When set, the item list uses two columns on wider viewports. */
  twoColumnList?: boolean;
  centerTitle?: boolean;
  items: string[];
};

export const EXCLUSIONS: ExclusionGroup[] = [
  {
    title: "Mother",
    items: [
      "Medicines and consumables",
      "Lactation and physiotherapy services",
      "Admission and medical record charges",
      "Housekeeping and maintenance charges",
      "Nutritional assessment and planned nutritional food during the stay",
    ],
  },
  {
    title: "Baby",
    items: [
      "Paediatric and neonatology doctor charges",
      "First-dose vaccination (BCG, OPV, Hep B) services and charges",
      "Basic lab investigations (blood grouping, bilirubin, TSH)",
      "Newborn hearing test",
      "One set of dress",
      "Admission and medical record charges",
      "Medicines and consumables (wet wipes, diapers, baby soap)",
      "Baby receiving charges",
    ],
  },
  {
    title: "Charged as per the doctor's advice",
    twoColumnList: true,
    centerTitle: true,
    items: [
      "Cross consultations for mother and baby",
      "NST",
      "Epidural",
      "Newborn screening test",
      "High-end investigations for mother and baby",
      "NICU admission and treatment, if required",
      "Tubectomy (family planning operation)",
      "Any additional test, procedure or scan for the baby beyond the estimate, charged at actuals",
      "Phototherapy",
      "Lab tests",
      "Stem cell banking",
      "Food for attenders",
      "Blood reservation and transfusion",
      "Muhurtham charges on Sundays, festival days, government holidays and odd hours",
      "Assistant surgeon fee",
      "Induction charges",
      "Twin delivery charges",
      "ICU care for the mother",
      "Fumigation charges for positive cases (HBsAg, VDRL, Hep B)",
    ],
  },
];

export type FacilityItem = {
  label: string;
  icon: "emergency" | "ldr" | "nicu" | "picu" | "anesthesia" | "imaging" | "support" | "paediatric" | "newborn" | "pharmacy";
};

export const FACILITIES: FacilityItem[] = [
  { label: "24/7 emergency support", icon: "emergency" },
  { label: "Labour, delivery and recovery rooms and suites", icon: "ldr" },
  { label: "Level III NICU with 24/7 newborn care", icon: "nicu" },
  { label: "PICU", icon: "picu" },
  { label: "Round-the-clock anesthetists", icon: "anesthesia" },
  { label: "Ultrasound and fetal medicine imaging", icon: "imaging" },
  { label: "Lactation, nutrition, physiotherapy support and Lamaze", icon: "support" },
  { label: "Paediatric support", icon: "paediatric" },
  { label: "Newborn care and vaccinations", icon: "newborn" },
  { label: "24/7 pharmacy", icon: "pharmacy" },
];

export const FAQS = [
  {
    question: "What does a birthing package include?",
    answer:
      "It can cover antenatal care, delivery, newborn care and postnatal support. The exact list depends on the package and hospital, and your care team will share it.",
  },
  {
    question: "Can I choose between normal and caesarean delivery?",
    answer:
      "The mode of delivery is decided with your obstetrician, based on your health and your baby's.",
  },
  {
    question: "What if my care needs change?",
    answer:
      "Your doctor will explain any additional care that becomes necessary and what it involves.",
  },
  {
    question: "Is newborn care part of the package?",
    answer:
      "Newborn assessment and care are part of birthing care. NICU support is available where clinically needed.",
  },
  {
    question: "How early should I plan my delivery?",
    answer:
      "Many families start planning in the second trimester. Talk to your doctor about what suits you.",
  },
  {
    question: "Can I see the hospital before I decide?",
    answer: "Request a callback and the team can arrange a visit.",
  },
  {
    question: "How do I find out about costs?",
    answer:
      "Costs depend on the package, room category and your clinical needs. The team will go through them with you on the call or at your visit.",
  },
];

export type PatientReview = {
  name: string;
  meta: string;
  stars: string;
  text: string;
};

export const REVIEWS_SECTION = {
  title: "Loved by Mothers, Trusted by Families",
  google: { rating: 4.9, reviewCount: 1840 },
  practo: { rating: 5, reviewCount: 920 },
};

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    name: "SSV Sharma",
    meta: "",
    stars: "★★★★★",
    text: "I would highly recommend Motherhood Hospital in Banashankari. The doctors are highly experienced, the staff is courteous, and the infrastructure is excellent. We felt completely safe and well-cared for during our time here. Thank you Motherhood and its staff for your wonderful service.",
  },
  {
    name: "Mrinmoy Paul",
    meta: "",
    stars: "★★★★★",
    text: "We had a very good experience in Motherhood. And This was our first baby. Right from reception to doctors, house keeping and nursing staff was excellent. Thank you for the support and service",
  },
  {
    name: "Nagu Rampur",
    meta: "",
    stars: "★★★★★",
    text: "Hospital is clean and well maintained. Doctor's are experienced and explain the problem clearly.Nurse's and staff are polite and supportive. Treatment quality is good with reasonable charges. Overall experience was very good and satisfying.",
  },
  {
    name: "Preeth Vasudevan",
    meta: "",
    stars: "★★★★★",
    text: "Had great experience delivering my child here. The doctors and nurses were very professional and supportive throughout the process. Timely food was provided as prescribed. Overall a great place to be for maternal and child care.",
  },
  {
    name: "Kiran Ranganathan",
    meta: "",
    stars: "★★★★★",
    text: "Excellent service and hospitalization. They have a list of packages for everything which makes it easier for one to choose according to their budget with photoshoots, casting and many more for new born babies.Located at Banashankari Bangalore, parking space is good and easily located as it is located on the main road on the street of devegowda petrol bunk.",
  },
  {
    name: "Pawan Kumar",
    meta: "",
    stars: "★★★★★",
    text: "My wife delivered our baby here a couple of days ago. Despite complications in pregnancy, mother and the baby emerged healthy and fine, primarily because of exemplary and uncompromising service provided by Motherhood's staff. They were kind, friendly and always ready to assist. A would-be mother can hope to safely deliver her baby even if the family cannot support for different reasons. Highly recommend it.",
  },
];
