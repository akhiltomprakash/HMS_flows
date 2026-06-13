const modules = [
  {
    id: "registration",
    title: "Registration + MRN",
    icon: "ID",
    summary: "Front desk intake, patient identity, and OPD token creation.",
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
    tone: "blue",
    module: true,
  },
  {
    id: "emergency",
    title: "Emergency / Casualty",
    icon: "ER",
    summary: "Fast triage and stabilization before OPD or IPD conversion.",
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
    tone: "red",
    module: true,
  },
  {
    id: "beds",
    title: "Beds / Wards / OT",
    icon: "BD",
    summary: "Bed board, ward transfers, OT scheduling, and occupancy.",
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
    tone: "purple",
    module: true,
  },
  {
    id: "nursing",
    title: "Nursing + MAR",
    icon: "NR",
    summary: "Vitals, medication administration, handover, and escalations.",
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
    tone: "purple",
    module: true,
  },
  {
    id: "ipd",
    title: "IPD / Admission",
    icon: "IP",
    summary: "Admitted patient workflow from admission request to discharge planning.",
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
    tone: "purple",
    module: true,
  },
  {
    id: "opd",
    title: "OPD + Queue",
    icon: "OP",
    summary: "Queue, doctor assignment, consultation, and referrals.",
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
    tone: "green",
    module: true,
  },
  {
    id: "record",
    title: "Central Patient Record",
    icon: "LR",
    summary:
      "Cross-department patient memory across OPD, IPD, orders, results, bills, and discharge.",
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
    tone: "red",
    module: true,
  },
  {
    id: "clinical",
    title: "Doctor Console",
    icon: "DR",
    summary: "Doctor workspace for notes, diagnoses, orders, prescriptions, and procedures.",
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
    tone: "green",
    module: true,
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    icon: "RX",
    summary: "Prescription fulfillment, dispensing, returns, and stock movement.",
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
    tone: "yellow",
    module: true,
  },
  {
    id: "lab",
    title: "Lab / Diagnostics",
    icon: "LB",
    summary: "Test ordering, sample collection, result upload, approval, and return to record.",
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
    tone: "orange",
    module: true,
  },
  {
    id: "discharge",
    title: "Discharge Summary",
    icon: "DS",
    summary:
      "Closure artifact for treatment, medicines, reports, billing status, and follow-up.",
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
    tone: "gray",
    module: true,
  },
  {
    id: "insurance",
    title: "Insurance / TPA",
    icon: "TP",
    summary: "Policy capture, authorization, claim documents, approval, and settlement.",
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
    tone: "blue",
    module: true,
  },
  {
    id: "billing",
    title: "Billing Ledger",
    icon: "₹",
    summary:
      "Single financial ledger across OPD, IPD, lab, pharmacy, packages, refunds, and settlement.",
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
    tone: "gray",
    module: true,
  },
];

const connections = [
  ["registration", "opd", "check-in + token", "identity", "critical"],
  ["registration", "ipd", "patient identity", "identity", "critical"],
  ["registration", "emergency", "quick/complete registration", "identity", "degraded"],
  ["registration", "record", "patient identity", "record", "critical"],
  ["emergency", "registration", "complete registration", "identity", "degraded"],
  ["emergency", "ipd", "convert", "clinical", "critical"],
  ["emergency", "clinical", "stabilization notes", "clinical", "critical"],
  ["opd", "ipd", "admit", "clinical", "critical"],
  ["opd", "clinical", "consult", "clinical", "critical"],
  ["ipd", "clinical", "rounds", "clinical", "critical"],
  ["ipd", "nursing", "nurse", "clinical", "critical"],
  ["beds", "ipd", "bed movement", "clinical", "critical"],
  ["ipd", "beds", "bed request", "clinical", "critical"],
  ["beds", "nursing", "ward context", "clinical", "degraded"],
  ["nursing", "beds", "ward status", "clinical", "degraded"],
  ["nursing", "record", "vitals + MAR", "record", "degraded"],
  ["ipd", "record", "admission history", "record", "critical"],
  ["opd", "record", "OPD history", "record", "critical"],
  ["clinical", "record", "notes + orders", "record", "critical"],
  ["clinical", "pharmacy", "prescription", "orders", "critical"],
  ["clinical", "lab", "test orders", "orders", "critical"],
  ["lab", "record", "results", "record", "degraded"],
  ["lab", "billing", "lab charges", "finance", "degraded"],
  ["pharmacy", "billing", "medicine charges", "finance", "degraded"],
  ["pharmacy", "discharge", "discharge meds", "clinical", "degraded"],
  ["lab", "discharge", "report summary", "clinical", "degraded"],
  ["clinical", "discharge", "doctor approval", "clinical", "critical"],
  ["nursing", "discharge", "care notes", "clinical", "degraded"],
  ["ipd", "discharge", "discharge closure", "clinical", "critical"],
  ["discharge", "record", "archive", "record", "critical"],
  ["discharge", "billing", "final settlement", "finance", "critical"],
  ["billing", "discharge", "settlement status", "finance", "critical"],
  ["discharge", "insurance", "claim documents", "finance", "degraded"],
  ["insurance", "discharge", "approval docs", "finance", "degraded"],
  ["billing", "insurance", "claim ledger", "finance", "critical"],
].map(([from, to, label, kind, severity]) => ({ from, to, label, kind, severity }));

const colors = {
  identity: "#7abfff",
  clinical: "#a78bfa",
  orders: "#f8bd57",
  finance: "#fb9a5f",
  record: "#70d88d",
  governance: "#62d4c9",
};

const POSITION_STORAGE_KEY = "his-map-explorer.positions.v4";

function loadSavedPositions() {
  try {
    const saved = JSON.parse(localStorage.getItem(POSITION_STORAGE_KEY) || "{}");
    modules.forEach((module) => {
      const position = saved[module.id];
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
  const positions = {};
  modules.forEach((module) => {
    positions[module.id] = { x: module.x, y: module.y };
  });
  localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(positions));
}

loadSavedPositions();

const moduleById = new Map(modules.map((module) => [module.id, module]));
let selected = null;
const renderedModules = new Map();
let dragState = null;

const nodeLayer = document.getElementById("nodeLayer");
const connectionLayer = document.getElementById("connectionLayer");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const mapCard = document.querySelector(".map-card");
const mapStage = document.getElementById("mapStage");
const mapContent = document.getElementById("mapContent");
const themeBtn = document.getElementById("themeBtn");
const connectionsSvg = document.querySelector(".connections");
let zoom = 1;
let canvasWidth = 1600;
let canvasHeight = 2050;

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

    const combinedDescription = [module.summary, ...module.details].join(" ");

    node.innerHTML = `
      <span class="icon">${module.icon}</span>
      <h3>${module.title}</h3>
      <p class="combined-description">${combinedDescription}</p>
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

function renderConnections() {
  connectionLayer.innerHTML = "";
  const focusId = selected;

  connections.forEach((connection, index) => {
    const active = !focusId || connection.from === focusId || connection.to === focusId;
    const path = pathFor(connection);
    const color = colors[connection.kind];
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
  let maxRight = 1600;
  let maxBottom = 2050;
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
  renderNodes();
  updateCanvasBounds();
  renderConnections();
}

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

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "◐";
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
  if (event.target.closest(".node")) {
    return;
  }

  selected = null;
  render();
});

render();
