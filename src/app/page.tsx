import Image from "next/image";
import bg from "../../public/background/home-background.png";
import { RenderModel } from "@/components/render-model";
import { WizardModel } from "@/components/models/wizard-model";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between relative">
        <Image
          src={bg}
          alt="bacground-image"
          className="-z-50 w-full h-full object-cover object-center opacity-25"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          priority
          fill
        />
        <div className="w-full h-screen">
          {/* navigation & 3d model component */}
          <RenderModel>
            <WizardModel />
          </RenderModel>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
