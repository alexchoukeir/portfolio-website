import Image from "next/image";
import background from "@/public/background.png";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src={background}
        className="object-cover"
        alt="Background"
        preload
        fill
        placeholder="blur"
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/15"></div>
    </div>
  );
}
