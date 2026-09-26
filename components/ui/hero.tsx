import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-40">
      <div className="w-full max-w-screen-xl py-4 px-12 bg-white/50 backdrop-blur-xl border-1 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col items-center text-center space-y-4 m-10">
          <span className="text-lg font-bold uppercase tracking-[0.3em] text-white/80">
            Software Engineer
          </span>
          <h1 className="my-8 text-2xl sm:text-5xl md:text-5xl lg:text-7xl font-bold font-pixel tracking-tighter">
            Hi,&thinsp;I&apos;m Alexander
          </h1>
          <p className="max-w-lg text-xl text-white">
            Passionate software engineer eager to apply my skills and knowledge
            in a professional setting, delivering high-quality solutions that
            meet and exceed expectations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              className="font-pixel bg-white px-6 py-3 font-medium text-black transition hover:bg-white/50 border-1 border-black"
              href="#projects"
            >
              View projects
            </Link>
            <Link
              className="font-pixel border-1 border-white px-6 py-3 font-medium transition hover:bg-white/50"
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
