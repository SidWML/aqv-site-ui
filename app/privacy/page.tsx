import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  { kind: "doc", id: "overview", nav: "Overview", heading: "Overview",
    body: [
      "This Privacy Policy explains how Amaravati Quantum Valley (\"AQV\", \"we\", \"us\") collects, uses and protects information when you use this website.",
      "By using the site you agree to the practices described here. This document is a general summary and does not constitute legal advice.",
      "Last updated: July 2026.",
    ] },
  { kind: "doc", id: "collect", nav: "What We Collect", heading: "Information we collect",
    body: [
      "We collect information you provide directly — such as your name, email address and message when you contact us, apply to a program, or subscribe to updates.",
      "We also collect limited technical information automatically, such as your browser type, device and pages visited, to keep the site secure and improve it.",
    ] },
  { kind: "doc", id: "use", nav: "How We Use It", heading: "How we use information",
    body: [
      "We use your information to respond to enquiries, process applications, send updates you have requested, and operate and improve the site.",
      "We do not sell your personal information. We use it only for the purposes described in this policy or as required by law.",
    ] },
  { kind: "doc", id: "sharing", nav: "Sharing", heading: "Sharing & disclosure",
    body: [
      "We may share information with service providers who help us operate the site and our programs, under appropriate confidentiality obligations.",
      "We may disclose information where required by law, or to protect the rights, safety and security of AQV and its users.",
    ] },
  { kind: "doc", id: "rights", nav: "Your Rights", heading: "Your choices & rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information, and you may unsubscribe from communications at any time.",
      "To exercise any of these rights, contact us using the details below.",
    ] },
  { kind: "doc", id: "security", nav: "Security & Contact", heading: "Security & contact",
    body: [
      "We take reasonable technical and organisational measures to protect your information, though no method of transmission over the internet is completely secure.",
      "Questions about this policy can be sent to info@aqv.in.",
    ] },
];

export default function Page() {
  return (
    <Subpage
      hero={{ kind: "simple", eyebrow: "LEGAL · PRIVACY", title: "Privacy", accent: "Policy.", lead: "How Amaravati Quantum Valley collects, uses and protects your information." }}
      blocks={blocks}
      cta={false}
    />
  );
}
