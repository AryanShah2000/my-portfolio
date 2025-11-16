import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function GlassCard({ title, children, className = "" }: Props) {
  return (
    <div className={`glass p-6 ${className}`}>
      {title ? (
        <h3 className="text-2xl font-semibold mb-2 text-white text-center">{title}</h3>
      ) : null}
      <div className="text-sm text-white/90">{children}</div>
    </div>
  );
}
