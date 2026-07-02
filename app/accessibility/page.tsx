import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  { kind: "doc", id: "commitment", nav: "Commitment", heading: "Our commitment",
    body: [
      "Amaravati Quantum Valley is committed to making this website accessible to as many people as possible, regardless of ability or technology.",
      "We aim to provide an experience that is perceivable, operable, understandable and robust for all users. Last updated: July 2026.",
    ] },
  { kind: "doc", id: "standards", nav: "Standards", heading: "Standards we follow",
    body: [
      "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA as our target standard.",
      "This includes sufficient colour contrast, keyboard-navigable interfaces, meaningful text alternatives and content that adapts to different screen sizes.",
    ] },
  { kind: "doc", id: "measures", nav: "Measures", heading: "Measures we take",
    body: [
      "We build with semantic markup, provide descriptive labels for interactive elements, and respect reduced-motion preferences where possible.",
      "Accessibility is considered as part of design and development, and we review the site as it evolves.",
    ] },
  { kind: "doc", id: "feedback", nav: "Feedback", heading: "Feedback & contact",
    body: [
      "Accessibility is an ongoing effort. If you encounter a barrier, or need content in an alternative format, we want to hear from you.",
      "Please contact us at info@aqv.in with details of the issue and the page concerned, and we will do our best to help.",
    ] },
];

export default function Page() {
  return (
    <Subpage
      hero={{ kind: "simple", eyebrow: "LEGAL · ACCESSIBILITY", title: "Accessibility", accent: "Statement.", lead: "Our commitment to making Amaravati Quantum Valley usable for everyone." }}
      blocks={blocks}
      cta={false}
    />
  );
}
