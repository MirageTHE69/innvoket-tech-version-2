export const BRAND = "Innvoket Tech";
export const SHOW_FOUNDING_OFFER = true;
export const CONTACT_EMAIL = "hello@innvoket.tech";
export const CONTACT_PHONE = "+1 (000) 000-0000";

export const problems = [
  { n: "01", title: "Missed calls", text: "When the front desk is busy, callers book somewhere else." },
  { n: "02", title: "Relying on referrals", text: "Word of mouth is great until it slows down." },
  { n: "03", title: "Invisible online", text: "If you're not in the top results nearby, patients never see you." },
];

export const emptySlotCosts = [
  { label: "5 empty slots a week", value: 26000, bg: "#FFF6F6" },
  { label: "10 a week", value: 52000, bg: "#FFF0F0" },
  { label: "20 a week", value: 104000, bg: "#FFE8E8" },
];

export const steps = [
  { title: "Get found", text: "We set up your Google profile and website so you show up when people nearby search for care." },
  { title: "Get chosen", text: "Automatic review requests build the rating patients check before they call." },
  { title: "Get booked", text: "Missed calls get an instant text with your booking link, so callers don't go elsewhere." },
  { title: "Keep them coming back", text: "Friendly recall messages bring past patients back for the care they still need." },
];

export const reportStats = [
  { label: "New patient inquiries", value: 64 },
  { label: "Bookings", value: 41 },
  { label: "Cost per new patient", value: 38, prefix: "$" },
  { label: "New reviews", value: 14 },
  { label: "Patients brought back", value: 11 },
];

export const weeklyBookings = [34, 40, 38, 47, 45, 52, 58, 55, 63, 68, 66, 74];

export const plans = [
  {
    name: "Get Found",
    tagline: "Be seen. Stop missing patients.",
    price: "$647",
    setup: "Setup $597",
    plus: null,
    featured: false,
    features: [
      "Clinic website with online booking button",
      "Google Maps and local search",
      "2 condition pages a month",
      "Automatic review requests",
      "Missed-call text back",
      "Monthly report",
    ],
  },
  {
    name: "Fill Your Schedule",
    tagline: "Steady new patients every month.",
    price: "$1,197",
    setup: "Setup $797",
    plus: "Everything in Get Found, plus:",
    featured: true,
    features: [
      "Google Ads management",
      "4 condition pages a month",
      "Patient reactivation and recall",
      "Year-end benefits campaign",
      "Live tracking dashboard",
    ],
  },
  {
    name: "Own Your Area",
    tagline: "Become the #1 clinic nearby.",
    price: "$2,197",
    setup: "Setup $997",
    plus: "Everything in Fill Your Schedule, plus:",
    featured: false,
    features: [
      "Facebook and Instagram ads",
      "Social media management",
      "24/7 AI receptionist",
      "Multilingual pages",
      "Strategy call every two weeks",
    ],
  },
];

export const phases = [
  { label: "Month 1", title: "Foundation", text: "Your Google profile, website, review requests and tracking get set up.", color: "#0F4C5C" },
  { label: "Month 2", title: "Launch", text: "Campaigns and condition pages go live.", color: "#2EC4B6" },
  { label: "Month 3", title: "Grow", text: "We put more into what's bringing patients in.", color: "#22C55E" },
];

export const why = [
  { n: "01", t: "Clinic-focused", d: "We understand MVA, WSIB/WCB and extended benefits patients, and how they choose a clinic." },
  { n: "02", t: "One team for everything", d: "Website, Google, ads, reviews and patient follow-up, handled together." },
  { n: "03", t: "Plain-language reporting", d: "A short monthly report on inquiries, bookings and cost per new patient." },
  { n: "04", t: "No long contracts", d: "A 3-month start, then month-to-month." },
  { n: "05", t: "Multilingual reach", d: "Pages and ads in Punjabi, Hindi, Urdu and Mandarin." },
];

export const faqs = [
  { q: "How soon will I see results?", a: "Most clinics see more calls and reviews within the first two months, once the foundations are live. Ads can bring inquiries sooner; search rankings usually take several months. We will give you a realistic timeline for your area on the audit call." },
  { q: "Do I have to sign a long contract?", a: "No. Plans start with a 3-month term so the work has time to take effect, then continue month-to-month." },
  { q: "How much should I spend on ads?", a: "It depends on your city and services. Most clinics start with a modest budget and adjust once they can see their cost per new patient. We suggest a starting range on the audit call. Your ad budget goes directly to the ad platforms, not to us." },
  { q: "Does this work with my booking software?", a: "Yes. We add your existing online booking link, such as Jane, to everything we build, and set up tracking so you can see which bookings came from where." },
  { q: "Who owns the website and accounts?", a: "You do. Your website, domain, Google Business Profile, ad accounts and data stay in your name. If you leave, everything stays with you." },
  { q: "Is my patient data safe?", a: "We do not need access to clinical records. We track inquiries and bookings, not health information, and we follow Canadian privacy law, including PIPEDA and applicable provincial rules." },
  { q: "Do you work with clinics outside Ontario and Alberta?", a: "Ontario and Alberta are our focus because we know those markets best. If your clinic is elsewhere in Canada, book an audit and we will tell you honestly whether we are a good fit." },
  { q: "What happens on the free audit call?", a: "In about 20 minutes we review your Google presence, website, reviews and how calls are handled, compare you with the top clinics near you, and share a 90-day plan. There is no obligation to sign up." },
];

export const auditSteps = [
  { title: "We review your online presence", text: "Your Google profile, website, reviews and how calls are handled." },
  { title: "We compare you with clinics nearby", text: "Where the top clinics in your area are ahead, and why." },
  { title: "You leave with a 90-day plan", text: "Yours to keep, whether or not you work with us." },
];

export const auditFields = [
  { name: "clinic", label: "Clinic name", type: "text", required: true, placeholder: "" },
  { name: "name", label: "Your name", type: "text", required: true, placeholder: "" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@clinic.ca" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "" },
  { name: "city", label: "City", type: "text", required: true, placeholder: "e.g. Brampton" },
  { name: "website", label: "Website", type: "url", required: false, placeholder: "https://" },
];
