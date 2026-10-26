import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./card";
import { Mail } from "lucide-react";
import Image from "next/image";
import linkedin from "@/public/linkedin.svg";

export default function Contact() {
  return (
    <section id="contact" className="h-[70vh] mx-auto max-w-5xl px-5 pt-70">
      <h2 className="text-3xl font-bold text-white [text-shadow:0,4px_18px_rgba(0,0,0,0.5)]">
        Contact Me
      </h2>
      <Card className="mt-10">
        <CardHeader className="text-xl pb-4">
          <CardTitle>
            <div className="flex flex-col items-center text-center space-y-4 m-10">
              <span className="text-lg font-bold uppercase tracking-[0.3em] text-white/80">
                Let&apos;s build something together.
              </span>
            </div>
          </CardTitle>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@alexchoukeir.com"
                className="flex items-center gap-8"
                suppressHydrationWarning
              >
                <Mail className="m-1"></Mail>
                <span className="underline">hello@alexchoukeir.com</span>
              </a>
              <Link
                href="https://www.linkedin.com/in/alexchoukeir/"
                className="flex items-center gap-8"
              >
                <Image
                  className="h-8"
                  src={linkedin}
                  alt=""
                  width={32}
                  height={32}
                  style={{ width: "auto" }}
                />
                <span className="underline">linkedin.com/in/alexchoukeir/</span>
              </Link>
            </div>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
}
