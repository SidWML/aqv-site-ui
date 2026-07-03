import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  { kind: "doc", id: "general", nav: "General", heading: "General disclaimer",
    body: [
      "The information on this website is provided for general informational purposes about Amaravati Quantum Valley and is subject to change without notice.",
      "This document is a general summary and does not constitute legal, financial or professional advice. Last updated: July 2026.",
    ] },
  { kind: "doc", id: "forward-looking", nav: "Forward-Looking", heading: "Forward-looking statements",
    body: [
      "Some content describes plans, targets and projections — including timelines, capacity, investment and impact figures. These are forward-looking and reflect current intentions and expectations.",
      "Actual outcomes may differ materially. Figures and dates are indicative and may be revised as the mission progresses.",
    ] },
  { kind: "doc", id: "advice", nav: "No Advice", heading: "No professional advice",
    body: [
      "Nothing on this site should be relied upon as legal, financial, investment or technical advice. You should seek independent professional advice before making decisions.",
      "References to investment opportunities are informational and are not an offer or solicitation.",
    ] },
  { kind: "doc", id: "external", nav: "External Content", heading: "External content & accuracy",
    body: [
      "The site may reference third-party organisations, products and links. We do not endorse or take responsibility for external content.",
      "While we work to keep information accurate and current, we make no warranty as to its completeness or accuracy. For clarification, contact info@aqv.in.",
    ] },
];

export default function Page() {
  return (
    <Subpage
      hero={{ kind: "simple", eyebrow: "LEGAL · DISCLAIMER", title: "Disclaimer.", lead: "Important notes on the information published on the Amaravati Quantum Valley website." }}
      blocks={blocks}
      cta={false}
    />
  );
}
