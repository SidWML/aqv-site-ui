import React from "react";

/**
 * Rounded pill button used by the closing CTA. `solid` = quantum indigo gradient
 * on cream; `outline` = hairline border on dark. Optional leading icon.
 */
export default function PillButton({
  href,
  children,
  variant = "solid",
  icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  icon?: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-3 no-underline rounded-[40px] px-[34px] py-[18px] text-[13px] font-semibold tracking-[0.1em]";
  const look =
    variant === "solid"
      ? "text-cream bg-[linear-gradient(100deg,#5B6CFF,#8B92E8)]"
      : "text-cream border border-cream/30";
  return (
    <a href={href} className={`${base} ${look} ${className}`}>
      {icon}
      {children}
    </a>
  );
}
