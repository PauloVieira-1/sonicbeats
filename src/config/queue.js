/**
 * Made-to-order queue settings.
 *
 * Every customer-facing statement about lead times comes from this file, so
 * the workshop schedule is a one-place edit. Note that changing these values
 * still needs a redeploy — moving the slot without one belongs in the backend,
 * together with per-order tracking.
 */

/* Completion slot the workshop is currently booking into. */
export const CURRENT_SLOT = "November 2026";

/* Outer bound across the whole catalogue. Used wherever a single figure has to
   stand in for every model — the disclosure text, the cart, the shop band. */
export const BUILD_WINDOW = "4 weeks – 5 months";

/* Per-speaker build windows, keyed by product name.
   These are placeholders derived from build complexity — they need confirming
   before launch. */
export const LEAD_TIMES = {
  Blackbox: "4–6 weeks",
  TinyMen: "4–6 weeks",
  Aurora: "6–10 weeks",
  Donager: "3–5 months",
};

export function leadTimeFor(name) {
  return LEAD_TIMES[name] || BUILD_WINDOW;
}

/* The four stages every commission moves through. The shop, the reserve modal,
   the process page and the confirmation page all read this list, so the site
   tells one story about how a build progresses. */
export const BUILD_STAGES = [
  {
    title: "Build slot reserved",
    description:
      "Your pair enters the workshop queue in the order slots are taken, and we confirm your place by email.",
  },
  {
    title: "Cabinet & woodwork",
    description:
      "Timber is selected and the enclosure is cut, joined and finished by hand.",
  },
  {
    title: "Acoustic calibration",
    description:
      "Drivers and crossovers go in, then each pair is tuned and listened to until it measures and sounds right.",
  },
  {
    title: "Crated & delivered",
    description: "Your speakers are crated for freight and sent to your door.",
  },
];

/* Disclosure the customer accepts before paying. Bump the version whenever the
   wording changes: it is sent with the payment as the record of what was
   actually shown and agreed to. */
export const ACKNOWLEDGEMENT = {
  version: "made-to-order-v1",
  text: `I understand that SonicBeats speakers are built individually by hand after ordering, and that my estimated delivery window is ${BUILD_WINDOW} depending on the model, component sourcing and acoustic tuning.`,
};

const ACK_STORAGE_KEY = "sb_ack";

/* Records that the disclosure was accepted, and when. Read back at checkout and
   attached to the payment. */
export function recordAcknowledgement() {
  const record = {
    version: ACKNOWLEDGEMENT.version,
    at: new Date().toISOString(),
  };
  try {
    localStorage.setItem(ACK_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* private mode — the checkout checkbox is still the gate */
  }
  return record;
}

export function readAcknowledgement() {
  try {
    const stored = JSON.parse(localStorage.getItem(ACK_STORAGE_KEY));
    return stored && stored.version ? stored : null;
  } catch {
    return null;
  }
}
