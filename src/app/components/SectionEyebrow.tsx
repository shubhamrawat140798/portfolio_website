import React from "react";

type SectionEyebrowProps = {
  children: React.ReactNode;
};

const SectionEyebrow = ({ children }: SectionEyebrowProps) => {
  return (
    <p className="section-eyebrow mb-2 font-mono text-sm text-blue-400">
      <span className="section-eyebrow-text">{children}</span>
    </p>
  );
};

export default SectionEyebrow;
