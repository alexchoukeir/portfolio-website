import Link from "next/link";
import { Card } from "./card";

export default function Hero() {
  return (
    <section
      id=""
      className="flex h-dvh w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-screen-xl py-4 px-12">
        <div className="flex flex-col items-center text-center space-y-4 m-10">
          <span className="text-lg font-bold uppercase tracking-[0.3em] text-white/80">
            Software Engineer
          </span>
          <h1 className="my-8 text-2xl sm:text-5xl md:text-5xl lg:text-7xl text-white font-bold tracking-tighter">
            Hi, I&apos;m Alexander
          </h1>
          <p className="max-w-lg text-xl font-medium text-white">
            Software Engineering Graduate from the University of Ottawa
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              className="rounded-2xl text-xl text-black bg-white border border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 font-medium transition hover:bg-white/50"
              href="#projects"
            >
              View projects
            </Link>
            <Link
              className="rounded-2xl text-xl text-white border border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 font-medium transition hover:bg-white/50"
              href="#contact"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
