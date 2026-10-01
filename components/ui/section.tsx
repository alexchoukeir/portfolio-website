import type { ReactNode } from "react";

interface SectionProps {
  name: string;
  id: string;
  children: ReactNode;
}

export default function Section({ name, id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-screen-xl py-4 px-12 bg-white/50 backdrop-blur-xl border-1 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
        <h1 className="text-2xl font-bold tracking-tighter">{name}</h1>
        {children}
      </div>
    </section>
  );
}
