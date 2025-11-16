import React from "react";
import GlassCard from "../components/GlassCard";

export default function Hero() {
  return (
    <section className="w-full py-24 pt-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-10"> 
          <h1 className="text-4xl font-bold mb-3">Aryan Shah</h1>
          <p className="text-lg text-white/85 mb-6">
            I build performant, accessible front-end experiences. This is a
            small glassmorphism sample component to get the visual language
            started.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <GlassCard title="Featured Project">
              A quick summary of a project. Use this card to highlight project
              title, tech and link.
            </GlassCard>
            <GlassCard title="Skills">
              React · TypeScript · Tailwind · Next.js · Accessibility
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
