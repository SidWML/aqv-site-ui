import Subpage, { type Block } from "../components/Subpage";

const blocks: Block[] = [
  { kind: "doc", id: "acceptance", nav: "Acceptance", heading: "Acceptance of terms",
    body: [
      "These Terms of Use govern your access to and use of the Amaravati Quantum Valley website. By using the site, you agree to these terms.",
      "If you do not agree, please do not use the site. This document is a general summary and does not constitute legal advice. Last updated: July 2026.",
    ] },
  { kind: "doc", id: "use", nav: "Use of the Site", heading: "Use of the site",
    body: [
      "You agree to use the site lawfully and not to interfere with its operation, security or availability, or to attempt unauthorised access to any part of it.",
      "You may not use the site to transmit unlawful, harmful or misleading content.",
    ] },
  { kind: "doc", id: "ip", nav: "Intellectual Property", heading: "Intellectual property",
    body: [
      "The content, design, logos and materials on this site are the property of AQV or its partners and are protected by applicable laws.",
      "You may not reproduce, distribute or create derivative works from the content without prior written permission, except as permitted for personal, non-commercial use.",
    ] },
  { kind: "doc", id: "third-party", nav: "Third-Party Links", heading: "Third-party links",
    body: [
      "The site may link to external websites and services that we do not control. We are not responsible for their content, policies or practices.",
      "Following any external link is at your own risk and subject to that site's own terms.",
    ] },
  { kind: "doc", id: "liability", nav: "Liability", heading: "Disclaimers & limitation of liability",
    body: [
      "The site is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied.",
      "To the fullest extent permitted by law, AQV is not liable for any loss or damage arising from your use of, or inability to use, the site.",
    ] },
  { kind: "doc", id: "changes", nav: "Changes & Contact", heading: "Changes & contact",
    body: [
      "We may update these terms from time to time. Continued use of the site after changes take effect constitutes acceptance of the revised terms.",
      "Questions about these terms can be sent to info@aqv.in.",
    ] },
];

export default function Page() {
  return (
    <Subpage
      hero={{ kind: "simple", eyebrow: "LEGAL · TERMS", title: "Terms of", accent: "Use.", lead: "The terms that govern your use of the Amaravati Quantum Valley website." }}
      blocks={blocks}
      cta={false}
    />
  );
}
