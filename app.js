const hospitalModules = [
  {
    id: "registration",
    title: "Registration + MRN",
    icon: "ID",
    summary: "Front desk intake, patient identity, and OPD token creation.",
    description:
      "Creates or finds the patient identity and token/MRN so OPD, emergency, IPD, billing, and records all refer to the same patient.",
    details: [
      "Walk-in / appointment check-in",
      "Existing patient lookup",
      "New patient registration",
      "OPD token generation",
      "MRN / UHID generation",
      "Duplicate detection / merge",
    ],
    impact:
      "Without this, OPD, IPD, billing, and patient history lose reliable patient identity.",
    x: 50,
    y: 40,
    w: 275,
    h: 185,
    tone: "registration",
    module: true,
  },
  {
    id: "emergency",
    title: "Emergency / Casualty",
    icon: "ER",
    summary: "Fast triage and stabilization before OPD or IPD conversion.",
    description:
      "Captures urgent triage and stabilization, then completes registration or routes the patient to the doctor console or admission.",
    details: [
      "Quick registration",
      "Triage priority",
      "Stabilization notes",
      "Convert to OPD / IPD",
      "Critical alerts",
    ],
    impact:
      "Without it, emergency care becomes manual and later conversion to OPD/IPD is fragile.",
    x: 50,
    y: 445,
    w: 275,
    h: 165,
    tone: "emergency",
    module: true,
  },
  {
    id: "beds",
    title: "Beds / Wards / OT",
    icon: "BD",
    summary: "Bed board, ward transfers, OT scheduling, and occupancy.",
    description:
      "Manages bed, ward, and OT availability, then feeds bed movement and ward status into IPD and nursing workflows.",
    details: [
      "Bed board",
      "Ward transfer",
      "OT scheduling",
      "Procedure slots",
      "Housekeeping status",
      "Occupancy dashboard",
    ],
    impact:
      "Without it, IPD can exist but bed movement, occupancy, and OT scheduling become manual.",
    x: 250,
    y: 880,
    w: 275,
    h: 175,
    tone: "beds",
    module: true,
  },
  {
    id: "nursing",
    title: "Nursing + MAR",
    icon: "NR",
    summary: "Vitals, medication administration, handover, and escalations.",
    description:
      "Records vitals, medication administration, and handovers during IPD, then passes care notes into the patient record and discharge.",
    details: [
      "Vitals charting",
      "Medication administration",
      "Intake / output",
      "Shift handover",
      "Task checklist",
      "Escalations",
    ],
    impact:
      "Without it, admitted care can continue but IPD documentation and discharge completeness degrade.",
    x: 555,
    y: 905,
    w: 275,
    h: 175,
    tone: "nursing",
    module: true,
  },
  {
    id: "ipd",
    title: "IPD / Admission",
    icon: "IP",
    summary: "Admitted patient workflow from admission request to discharge planning.",
    description:
      "Coordinates admitted care across beds, nursing, doctor rounds, and procedures, then closes the stay into discharge and patient history.",
    details: [
      "Admission request",
      "Bed allocation",
      "Ward / room transfer",
      "Nursing notes",
      "Doctor rounds",
      "Procedure tracking",
      "Discharge planning",
    ],
    impact:
      "Without IPD, admitted care, nursing handoff, bed occupancy, and discharge closure cannot be digitized.",
    x: 415,
    y: 540,
    w: 330,
    h: 180,
    tone: "ipd",
    module: true,
  },
  {
    id: "opd",
    title: "OPD + Queue",
    icon: "OP",
    summary: "Queue, doctor assignment, consultation, and referrals.",
    description:
      "Uses the registration token to manage outpatient queues, doctor assignment, consultation, referrals, admission, and OPD history.",
    details: [
      "Queue view",
      "Doctor assignment",
      "Consultation record",
      "Referral to lab, pharmacy, IPD",
      "Follow-up scheduling",
    ],
    impact:
      "Without OPD, outpatient consultations, referrals, and token-based flow break.",
    x: 360,
    y: 300,
    w: 330,
    h: 175,
    tone: "opd",
    module: true,
  },
  {
    id: "record",
    title: "Central Patient Record",
    icon: "LR",
    summary:
      "Cross-department patient memory across OPD, IPD, orders, results, bills, and discharge.",
    description:
      "Collects identity, OPD/IPD history, doctor notes, vitals, results, medicines, bills, and discharge into one searchable patient view.",
    details: [
      "Cross-department timeline",
      "Orders, results, meds, bills",
      "IPD + OPD history",
      "Discharge summary archive",
      "Search and retrieval",
    ],
    impact:
      "Without it, the HIS becomes transactional and doctors lose the full patient story.",
    x: 1275,
    y: 310,
    w: 350,
    h: 200,
    tone: "record",
    module: true,
  },
  {
    id: "clinical",
    title: "Doctor Console",
    icon: "DR",
    summary: "Doctor workspace for notes, diagnoses, orders, prescriptions, and procedures.",
    description:
      "Lets doctors work on OPD, IPD, and emergency cases, then send notes, prescriptions, test orders, and discharge approvals onward.",
    details: [
      "Doctor notes",
      "Diagnosis + orders",
      "Prescriptions",
      "Care plans",
      "Procedures",
      "Templates by specialty",
    ],
    impact:
      "Without it, doctors can see patients but clinical decisions and orders happen outside the system.",
    x: 1035,
    y: 65,
    w: 330,
    h: 180,
    tone: "clinical",
    module: true,
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    icon: "RX",
    summary: "Prescription fulfillment, dispensing, returns, and stock movement.",
    description:
      "Receives prescriptions from the doctor console, dispenses medicines, updates stock, and sends medicine charges or discharge meds onward.",
    details: [
      "Prescription fulfillment",
      "Dispense / return",
      "Batch + expiry tracking",
      "Stock deduction",
      "Purchase / restock",
      "Substitution rules",
    ],
    impact:
      "Without it, prescriptions can be written but dispensing and stock deduction are manual.",
    x: 1775,
    y: 705,
    w: 315,
    h: 190,
    tone: "pharmacy",
    module: true,
  },
  {
    id: "lab",
    title: "Lab / Diagnostics",
    icon: "LB",
    summary: "Test ordering, sample collection, result upload, approval, and return to record.",
    description:
      "Receives test orders from the doctor console, manages sample and report workflow, then sends results to records, billing, and discharge.",
    details: [
      "Test ordering",
      "Sample collection",
      "Result entry/upload",
      "Report approval",
      "Machine/LIS integration",
      "Return result to record",
    ],
    impact:
      "Without it, clinical care can continue but diagnostic results and lab billing degrade.",
    x: 1990,
    y: 35,
    w: 350,
    h: 190,
    tone: "lab",
    module: true,
  },
  {
    id: "discharge",
    title: "Discharge Summary",
    icon: "DS",
    summary:
      "Closure artifact for treatment, medicines, reports, billing status, and follow-up.",
    description:
      "Pulls IPD closure, doctor approval, nursing notes, lab reports, pharmacy medicines, billing status, and insurance documents into discharge.",
    details: [
      "Discharge diagnosis",
      "Treatment given",
      "Procedures done",
      "Lab/report summary",
      "Medicines on discharge",
      "Follow-up instructions",
      "Final settlement status",
    ],
    impact:
      "Without it, IPD closure, claims, patient record, and continuity of care become incomplete.",
    x: 1100,
    y: 730,
    w: 290,
    h: 230,
    tone: "discharge",
    module: true,
  },
  {
    id: "insurance",
    title: "Insurance / TPA",
    icon: "TP",
    summary: "Policy capture, authorization, claim documents, approval, and settlement.",
    description:
      "Uses discharge and billing documents to manage insurance approval, claim submission, and final settlement with the TPA.",
    details: [
      "Policy capture",
      "Pre-authorization",
      "Claim documents",
      "Approval status",
      "Discharge billing",
      "Claim settlement",
    ],
    impact:
      "Without it, cash workflows still work but insured discharge and claim settlement become manual.",
    x: 2065,
    y: 940,
    w: 315,
    h: 180,
    tone: "insurance",
    module: true,
  },
  {
    id: "billing",
    title: "Billing Ledger",
    icon: "₹",
    summary:
      "Single financial ledger across OPD, IPD, lab, pharmacy, packages, refunds, and settlement.",
    description:
      "Collects OPD, IPD, lab, and pharmacy charges, then returns settlement status for discharge and insurance claims.",
    details: [
      "OPD/IPD/lab/pharmacy billing",
      "Deposits + advances",
      "Packages / procedures",
      "Discounts + refunds",
      "Final settlement",
      "Receipts and exports",
    ],
    impact:
      "Without it, care can happen but payment, discharge settlement, and revenue reporting break.",
    x: 1970,
    y: 430,
    w: 350,
    h: 190,
    tone: "billing",
    module: true,
  },
];

const hospitalConnections = [
  ["registration", "opd", "check-in + token", "identity", "critical", "After registration, the patient gets an OPD token and can enter the outpatient queue."],
  ["registration", "ipd", "patient identity", "identity", "critical", "If the patient is admitted, the same registration identity is used for the IPD stay."],
  ["registration", "emergency", "quick/complete registration", "identity", "degraded", "Some patients register first and then go to emergency with the same patient identity."],
  ["registration", "record", "patient identity", "record", "critical", "Registration creates the base patient identity that the central record uses everywhere else."],
  ["emergency", "registration", "complete registration", "identity", "degraded", "In urgent cases, emergency care can start first and registration can be completed after the patient is stable."],
  ["emergency", "ipd", "convert", "clinical", "critical", "If the emergency case needs admission, it can be converted into an IPD stay."],
  ["emergency", "clinical", "stabilization notes", "clinical", "critical", "Emergency notes and stabilization details go to the doctor so treatment can continue with context."],
  ["emergency", "record", "emergency notes", "record", "critical", "The emergency visit becomes part of the patient's central history."],
  ["opd", "ipd", "admit", "clinical", "critical", "If an outpatient needs admission, the OPD visit can move into IPD."],
  ["opd", "clinical", "consult", "clinical", "critical", "The OPD queue sends the patient to the doctor console for consultation."],
  ["ipd", "clinical", "rounds", "clinical", "critical", "Admitted patients appear in the doctor console for rounds, notes, orders, and decisions."],
  ["ipd", "nursing", "nurse", "clinical", "critical", "Once a patient is admitted, nursing teams record vitals, medicines, and ward care."],
  ["beds", "ipd", "bed movement", "clinical", "critical", "Bed and ward changes update the active IPD stay."],
  ["ipd", "beds", "bed request", "clinical", "critical", "IPD requests a bed or ward movement when the admitted patient needs placement."],
  ["beds", "nursing", "ward context", "clinical", "degraded", "Nursing uses bed and ward information to know where the patient is and what ward context applies."],
  ["nursing", "beds", "ward status", "clinical", "degraded", "Nursing updates can reflect ward status, movement readiness, or bed-related care state."],
  ["nursing", "record", "vitals + MAR", "record", "degraded", "Vitals, medication administration, and nursing notes are saved into the patient record."],
  ["ipd", "record", "admission history", "record", "critical", "The IPD stay adds admission, ward, treatment, and discharge history to the patient record."],
  ["opd", "record", "OPD history", "record", "critical", "Each OPD visit is saved into the patient's central history."],
  ["clinical", "record", "notes + orders", "record", "critical", "Doctor notes, diagnoses, orders, and prescriptions become part of the patient record."],
  ["clinical", "pharmacy", "prescription", "orders", "critical", "When the doctor prescribes medicines, pharmacy receives them for dispensing."],
  ["clinical", "lab", "test orders", "orders", "critical", "When the doctor orders tests, the lab receives the request."],
  ["lab", "record", "results", "record", "degraded", "Approved lab results are saved back into the patient record."],
  ["lab", "billing", "lab charges", "finance", "degraded", "Lab tests create charges that flow into billing."],
  ["pharmacy", "billing", "medicine charges", "finance", "degraded", "Dispensed medicines create charges that flow into billing."],
  ["pharmacy", "discharge", "discharge meds", "clinical", "degraded", "Medicines to continue after discharge are included in the discharge summary."],
  ["lab", "discharge", "report summary", "clinical", "degraded", "Important lab reports can be summarized in the discharge summary."],
  ["clinical", "discharge", "doctor approval", "clinical", "critical", "The doctor reviews and approves the clinical part of discharge."],
  ["nursing", "discharge", "care notes", "clinical", "degraded", "Nursing notes help complete the care summary before discharge."],
  ["ipd", "discharge", "discharge closure", "clinical", "critical", "The admitted stay closes through the discharge summary."],
  ["discharge", "record", "archive", "record", "critical", "The final discharge summary is saved into the patient record."],
  ["discharge", "billing", "final settlement", "finance", "critical", "Discharge checks billing so the final settlement can be completed."],
  ["billing", "discharge", "settlement status", "finance", "critical", "Billing sends payment and settlement status back to discharge."],
  ["discharge", "insurance", "claim documents", "finance", "degraded", "Discharge documents help prepare the insurance claim."],
  ["insurance", "discharge", "approval docs", "finance", "degraded", "Insurance approvals or claim details come back into the discharge process."],
  ["billing", "insurance", "claim ledger", "finance", "critical", "Billing provides the financial details needed for insurance claims and settlement."],
].map(([from, to, label, kind, severity, explanation]) => ({
  from,
  to,
  label,
  kind,
  severity,
  explanation,
}));

const clinicModules = [
  {
    id: "clinic-patient-hub",
    title: "Patient Registration + Hub",
    icon: "ID",
    summary: "Patient identity, lookup, history, and quick retrieval for clinic visits.",
    description:
      "Creates or finds the patient profile, keeps demographics and identifiers together, and acts as the clinic's lightweight patient record for prior visits, prescriptions, bills, attachments, and quick summaries.",
    details: [],
    impact:
      "Without it, clinic visits, prescriptions, billing, and remote WhatsApp lookup cannot reliably point back to the same patient.",
    x: 55,
    y: 110,
    w: 360,
    h: 185,
    tone: "clinic-hub",
    module: true,
  },
  {
    id: "clinic-consultation",
    title: "Visit / Doctor Consultation",
    icon: "DR",
    summary: "Doctor workspace for each clinic visit.",
    description:
      "Opens the active visit from the patient hub so the doctor can record diagnosis, clinical notes, vitals, observations, follow-up plans, reports, attachments, and context from previous visits.",
    details: [],
    impact:
      "Without it, the clinic can find patients but the actual clinical decision, prescription, and charge flow moves outside the system.",
    x: 545,
    y: 90,
    w: 380,
    h: 210,
    tone: "clinic-consult",
    module: true,
  },
  {
    id: "clinic-prescriptions",
    title: "Prescriptions",
    icon: "RX",
    summary: "Medicines prescribed during a consultation.",
    description:
      "Turns the doctor's treatment plan into a shareable prescription, supports repeat or copied medicine context, and links prescribed medicines to inventory and billing when the clinic dispenses them.",
    details: [],
    impact:
      "Without it, doctors can document visits but medicine advice, repeat prescriptions, stock deduction, and sharing become manual.",
    x: 1120,
    y: 95,
    w: 360,
    h: 200,
    tone: "clinic-prescription",
    module: true,
  },
  {
    id: "clinic-inventory",
    title: "Medicine Inventory",
    icon: "ST",
    summary: "Clinic medicine catalog, stock, expiry, and alerts.",
    description:
      "Maintains the medicine catalog and stock position, tracks stock in and out, warns on low stock or expiry, and deducts inventory when prescriptions are fulfilled from clinic stock.",
    details: [],
    impact:
      "Without it, prescriptions can still be written but stock, expiry, and medicine availability must be reconciled manually.",
    x: 1640,
    y: 80,
    w: 360,
    h: 205,
    tone: "clinic-inventory",
    module: true,
  },
  {
    id: "clinic-billing",
    title: "Billing + Payments",
    icon: "₹",
    summary: "Consultation charges, medicine charges, receipts, and daily collections.",
    description:
      "Builds a bill from the visit, consultation fees, and dispensed medicines, then tracks payment status, receipts, invoice export, and a simple daily collection view for the clinic.",
    details: [],
    impact:
      "Without it, the clinical workflow can run but revenue capture, payment status, and daily collection reporting break.",
    x: 1090,
    y: 520,
    w: 390,
    h: 210,
    tone: "clinic-billing",
    module: true,
  },
  {
    id: "clinic-whatsapp",
    title: "WhatsApp Remote Lookup",
    icon: "WA",
    summary: "Remote doctor access to patient data through WhatsApp lookup.",
    description:
      "Sends the relevant clinic database view to a doctor's WhatsApp when remote lookup is needed, including identity, prior visits, prescriptions, billing context, reports, and recent clinical history.",
    details: [],
    impact:
      "Without it, doctors can still use the clinic system on-site but remote patient lookup depends on manual staff coordination.",
    x: 55,
    y: 365,
    w: 360,
    h: 190,
    tone: "clinic-whatsapp",
    module: true,
  },
];

const clinicConnections = [
  ["clinic-patient-hub", "clinic-consultation", "open visit", "identity", "critical", "The doctor opens a visit from the patient profile before starting the consultation."],
  ["clinic-consultation", "clinic-patient-hub", "visit history", "record", "critical", "After the consultation, the visit notes return to the patient hub as history."],
  ["clinic-consultation", "clinic-prescriptions", "treatment plan", "clinical", "critical", "The doctor's treatment plan becomes the prescription for that visit."],
  ["clinic-prescriptions", "clinic-inventory", "stock deduction", "orders", "degraded", "If medicines are dispensed from the clinic, prescription items reduce stock."],
  ["clinic-prescriptions", "clinic-billing", "medicine charges", "finance", "degraded", "Dispensed prescription medicines can be added to the bill."],
  ["clinic-consultation", "clinic-billing", "consultation charge", "finance", "critical", "The consultation creates the basic visit charge for billing."],
  ["clinic-billing", "clinic-patient-hub", "payment history", "record", "degraded", "Payments and receipts are saved back under the patient profile."],
  ["clinic-patient-hub", "clinic-whatsapp", "patient database view", "record", "critical", "When a doctor needs remote access, the system sends the patient database view to WhatsApp."],
].map(([from, to, label, kind, severity, explanation]) => ({
  from,
  to,
  label,
  kind,
  severity,
  explanation,
}));

const productMaps = {
  hospital: {
    title: "Hospital module map",
    modules: hospitalModules,
    connections: hospitalConnections,
    minWidth: 1600,
    minHeight: 2050,
  },
  clinic: {
    title: "Clinic module map",
    modules: clinicModules,
    connections: clinicConnections,
    minWidth: 1600,
    minHeight: 980,
  },
};

const icons = {
  registration: `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M12 11v6"/>`,
  emergency: `<path d="M8 2h8l6 6v8l-6 6H8l-6-6V8z"/><path d="M12 7v5"/><path d="M12 16h.01"/>`,
  beds: `<path d="M3 7v10"/><path d="M21 11v6"/><path d="M3 13h18"/><path d="M7 13V9h7a3 3 0 0 1 3 3v1"/>`,
  nursing: `<path d="M12 21s-7-4.6-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.4-7 11-7 11z"/><path d="M12 8v6"/><path d="M9 11h6"/>`,
  ipd: `<path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"/><path d="M9 21v-6h6v6"/><path d="M9 8h6"/><path d="M12 5v6"/>`,
  opd: `<circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><path d="M18 8h3"/><path d="M3 8h3"/>`,
  record: `<path d="M4 4h16v16H4z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>`,
  clinical: `<path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z"/>`,
  pharmacy: `<path d="M10 21a5 5 0 0 1 0-7l4-4a5 5 0 0 1 7 7l-4 4a5 5 0 0 1-7 0z"/><path d="M14 10l7 7"/><path d="M3 6h8"/><path d="M7 2v8"/>`,
  lab: `<path d="M10 2v6l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V2"/><path d="M8 2h8"/><path d="M7 16h10"/>`,
  discharge: `<path d="M7 3h10l3 3v15H7z"/><path d="M17 3v4h4"/><path d="M10 14h7"/><path d="M14 10v8"/><path d="M11 15l3 3 3-3"/>`,
  insurance: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-5"/>`,
  billing: `<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h4"/>`,
  "clinic-patient-hub": `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M12 11v6"/>`,
  "clinic-consultation": `<path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z"/>`,
  "clinic-prescriptions": `<path d="M7 3h10v18H7z"/><path d="M10 8h4"/><path d="M12 6v4"/><path d="M10 14h4"/><path d="M10 17h4"/>`,
  "clinic-inventory": `<path d="M3 7l9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>`,
  "clinic-billing": `<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h4"/>`,
  "clinic-whatsapp": `<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5z"/><path d="M9 9c.5 2 2 3.5 4 4l1.5-1.5"/>`,
};

function iconFor(moduleId) {
  return `
    <svg class="title-icon" viewBox="0 0 24 24" aria-hidden="true">
      ${icons[moduleId] || icons.record}
    </svg>
  `;
}

const POSITION_STORAGE_KEY = "his-map-explorer.positions.v5";
const HIGH_CONTRAST_FLOW_TONES = new Set(["emergency", "pharmacy", "lab"]);
let activeProduct = "hospital";
let activeMap = productMaps[activeProduct];
let modules = activeMap.modules;
let connections = activeMap.connections;
let moduleById = new Map(modules.map((module) => [module.id, module]));

function loadSavedPositions() {
  try {
    const saved = JSON.parse(localStorage.getItem(POSITION_STORAGE_KEY) || "{}");
    const productPositions = saved[activeProduct] || {};
    modules.forEach((module) => {
      const position = productPositions[module.id];
      if (
        position &&
        Number.isFinite(position.x) &&
        Number.isFinite(position.y)
      ) {
        module.x = position.x;
        module.y = position.y;
      }
    });
  } catch {
    localStorage.removeItem(POSITION_STORAGE_KEY);
  }
}

function savePositions() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(POSITION_STORAGE_KEY) || "{}");
  } catch {
    saved = {};
  }

  const positions = {};
  modules.forEach((module) => {
    positions[module.id] = { x: module.x, y: module.y };
  });
  saved[activeProduct] = positions;
  localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(saved));
}

loadSavedPositions();

let selected = null;
const renderedModules = new Map();
let dragState = null;

const nodeLayer = document.getElementById("nodeLayer");
const connectionLayer = document.getElementById("connectionLayer");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const mapCard = document.querySelector(".map-card");
const mapStage = document.getElementById("mapStage");
const mapContent = document.getElementById("mapContent");
const connectionsSvg = document.querySelector(".connections");
const mapTitle = document.getElementById("mapTitle");
const tabButtons = document.querySelectorAll("[data-product]");
const relationPanel = document.getElementById("relationPanel");
const relationTitle = document.getElementById("relationTitle");
const relationList = document.getElementById("relationList");
const relationCloseBtn = document.getElementById("relationCloseBtn");
let zoom = 1;
let canvasWidth = 1600;
let canvasHeight = 2050;
const toneColorCache = new Map();

function toneColor(tone) {
  if (toneColorCache.has(tone)) {
    return toneColorCache.get(tone);
  }

  const probe = document.createElement("span");
  probe.className = `tone-${tone}`;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);
  const color =
    getComputedStyle(probe).getPropertyValue("--tone-border").trim() ||
    getComputedStyle(probe).borderTopColor;
  probe.remove();
  toneColorCache.set(tone, color);
  return color;
}

function center(module) {
  const rendered = renderedModules.get(module.id);
  const width = rendered?.width || module.w;
  const height = rendered?.height || module.h;
  return { x: module.x + width / 2, y: module.y + height / 2 };
}

function pathFor(connection) {
  const from = moduleById.get(connection.from);
  const to = moduleById.get(connection.to);
  const a = center(from);
  const b = center(to);
  const dx = Math.abs(b.x - a.x);
  const bend = Math.min(160, Math.max(70, dx / 2));
  const c1x = a.x + (b.x > a.x ? bend : -bend);
  const c2x = b.x - (b.x > a.x ? bend : -bend);
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

function relationSets(focusId) {
  if (!focusId) {
    return { incoming: [], outgoing: [], related: new Set() };
  }

  const incoming = connections.filter((connection) => connection.to === focusId);
  const outgoing = connections.filter((connection) => connection.from === focusId);
  const related = new Set([
    ...incoming.map((connection) => connection.from),
    ...outgoing.map((connection) => connection.to),
  ]);
  return { incoming, outgoing, related };
}

function renderNodes() {
  nodeLayer.innerHTML = "";
  renderedModules.clear();
  const focusId = selected;
  const { related } = relationSets(focusId);

  modules.forEach((module) => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = `node tone-${module.tone}`;
    node.style.left = `${module.x}px`;
    node.style.top = `${module.y}px`;
    node.style.width = `${module.w}px`;

    if (module.id === focusId) node.classList.add("focused");
    if (focusId && module.id !== focusId && !related.has(module.id)) {
      node.classList.add("dimmed");
    }

    node.innerHTML = `
      <h3 class="node-title">${iconFor(module.id)}<span>${module.title}</span></h3>
      <p class="module-description">${module.description}</p>
    `;

    node.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;

      event.stopPropagation();
      node.setPointerCapture(event.pointerId);
      dragState = {
        id: module.id,
        node,
        pointerId: event.pointerId,
        startClientX: event.clientX,
        startClientY: event.clientY,
        startX: module.x,
        startY: module.y,
        moved: false,
      };
      node.classList.add("dragging");
    });

    node.addEventListener("pointermove", (event) => {
      if (!dragState || dragState.id !== module.id) return;

      const dx = (event.clientX - dragState.startClientX) / zoom;
      const dy = (event.clientY - dragState.startClientY) / zoom;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        dragState.moved = true;
      }

      module.x = Math.max(0, dragState.startX + dx);
      module.y = Math.max(0, dragState.startY + dy);
      node.style.left = `${module.x}px`;
      node.style.top = `${module.y}px`;
      renderedModules.set(module.id, {
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
      updateCanvasBounds();
      renderConnections();
    });

    node.addEventListener("pointerup", (event) => {
      if (!dragState || dragState.id !== module.id) return;

      node.releasePointerCapture(event.pointerId);
      node.classList.remove("dragging");
      const wasDrag = dragState.moved;
      dragState = null;

      if (!wasDrag) {
        selected = module.id;
      } else {
        savePositions();
      }

      render();
    });

    node.addEventListener("pointercancel", () => {
      if (!dragState || dragState.id !== module.id) return;
      node.classList.remove("dragging");
      dragState = null;
      render();
    });
    nodeLayer.appendChild(node);
    renderedModules.set(module.id, {
      width: node.offsetWidth,
      height: node.offsetHeight,
    });
  });
}

function renderRelationPanel() {
  if (!selected) {
    relationPanel.hidden = true;
    relationTitle.textContent = "";
    relationList.innerHTML = "";
    return;
  }

  const selectedModule = moduleById.get(selected);
  const { incoming, outgoing } = relationSets(selected);
  const selectedConnections = [...outgoing, ...incoming];

  relationPanel.hidden = false;
  relationTitle.textContent = selectedModule.title;
  relationList.innerHTML = "";

  selectedConnections.forEach((connection) => {
    const isOutgoing = connection.from === selected;
    const otherModule = moduleById.get(
      isOutgoing ? connection.to : connection.from,
    );
    const selectedTitle = selectedModule.title;
    const otherTitle = otherModule.title;
    const directionLabel = isOutgoing
      ? `${selectedTitle} sends to ${otherTitle}`
      : `${otherTitle} sends to ${selectedTitle}`;
    const directionArrow = isOutgoing ? "↑" : "↓";
    const relation = document.createElement("article");
    relation.className = `relation-item tone-${otherModule.tone}`;
    relation.innerHTML = `
      <h3 class="relation-item-title">
        ${iconFor(otherModule.id)}
        <span>${otherModule.title}</span>
        <span class="relation-arrow" aria-label="${directionLabel}" title="${directionLabel}">${directionArrow}</span>
      </h3>
      <p>${connection.explanation}</p>
    `;
    relationList.appendChild(relation);
  });
}

function renderConnections() {
  connectionLayer.innerHTML = "";
  const focusId = selected;

  connections.forEach((connection, index) => {
    const active = !focusId || connection.from === focusId || connection.to === focusId;
    const path = pathFor(connection);
    const fromModule = moduleById.get(connection.from);
    const color = toneColor(fromModule.tone);
    const pathId = `flow-${index}`;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute("d", path);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", active ? "2" : "1.25");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("marker-end", "url(#arrow)");
    line.setAttribute("color", color);
    line.setAttribute("id", pathId);
    line.classList.add("flow-path");
    if (!HIGH_CONTRAST_FLOW_TONES.has(fromModule.tone)) {
      line.classList.add("softer");
    }
    if (!active && focusId) line.classList.add("dimmed");
    if (active) line.classList.add("active");
    group.appendChild(line);

    if (active) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "5");
      dot.setAttribute("fill", color);
      dot.classList.add("flow-dot");

      const motion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
      motion.setAttribute("dur", "3.2s");
      motion.setAttribute("repeatCount", "indefinite");
      const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
      mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${pathId}`);
      motion.appendChild(mpath);
      dot.appendChild(motion);
      group.appendChild(dot);
    }

    connectionLayer.appendChild(group);
  });
}

function updateCanvasBounds() {
  let maxRight = activeMap.minWidth;
  let maxBottom = activeMap.minHeight;
  const padding = 360;

  modules.forEach((module) => {
    const rendered = renderedModules.get(module.id);
    const width = rendered?.width || module.w;
    const height = rendered?.height || module.h;
    maxRight = Math.max(maxRight, module.x + width + padding);
    maxBottom = Math.max(maxBottom, module.y + height + padding);
  });

  canvasWidth = Math.ceil(maxRight);
  canvasHeight = Math.ceil(maxBottom);
  mapContent.style.width = `${canvasWidth}px`;
  mapContent.style.height = `${canvasHeight}px`;
  nodeLayer.style.width = `${canvasWidth}px`;
  nodeLayer.style.height = `${canvasHeight}px`;
  connectionsSvg.style.width = `${canvasWidth}px`;
  connectionsSvg.style.height = `${canvasHeight}px`;
  connectionsSvg.setAttribute("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`);
}

function render() {
  mapTitle.textContent = activeMap.title;
  renderNodes();
  updateCanvasBounds();
  renderConnections();
  renderRelationPanel();
}

function setActiveProduct(product) {
  if (!productMaps[product] || product === activeProduct) return;

  activeProduct = product;
  activeMap = productMaps[activeProduct];
  modules = activeMap.modules;
  connections = activeMap.connections;
  moduleById = new Map(modules.map((module) => [module.id, module]));
  selected = null;
  zoom = 1;
  mapContent.style.zoom = zoom;
  mapStage.scrollTo({ left: 0, top: 0 });
  loadSavedPositions();

  tabButtons.forEach((button) => {
    const isActive = button.dataset.product === activeProduct;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  render();
}

tabButtons.forEach((button) => {
  button.setAttribute(
    "aria-current",
    button.dataset.product === activeProduct ? "page" : "false",
  );
  button.addEventListener("click", () => setActiveProduct(button.dataset.product));
});

fullscreenBtn.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await mapCard.requestFullscreen();
    fullscreenBtn.textContent = "×";
    fullscreenBtn.setAttribute("aria-label", "Exit full screen");
  } else {
    await document.exitFullscreen();
    fullscreenBtn.textContent = "⛶";
    fullscreenBtn.setAttribute("aria-label", "Full screen");
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenBtn.textContent = document.fullscreenElement ? "×" : "⛶";
  fullscreenBtn.setAttribute(
    "aria-label",
    document.fullscreenElement ? "Exit full screen" : "Full screen",
  );
});

function applyZoom(nextZoom, originX, originY) {
  const clamped = Math.min(1.9, Math.max(0.55, nextZoom));
  const rect = mapStage.getBoundingClientRect();
  const beforeX = (mapStage.scrollLeft + originX - rect.left) / zoom;
  const beforeY = (mapStage.scrollTop + originY - rect.top) / zoom;

  zoom = clamped;
  mapContent.style.zoom = zoom;

  mapStage.scrollLeft = beforeX * zoom - (originX - rect.left);
  mapStage.scrollTop = beforeY * zoom - (originY - rect.top);
}

mapStage.addEventListener(
  "wheel",
  (event) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      const factor = event.deltaY > 0 ? 0.92 : 1.08;
      applyZoom(zoom * factor, event.clientX, event.clientY);
      return;
    }

    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      mapStage.scrollLeft += event.deltaX;
    }
  },
  { passive: false },
);

mapStage.addEventListener("click", (event) => {
  if (event.target.closest(".node") || event.target.closest(".relation-panel")) {
    return;
  }

  selected = null;
  render();
});

relationCloseBtn.addEventListener("click", () => {
  selected = null;
  render();
});

render();
