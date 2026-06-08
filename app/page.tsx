import Welcome from "@/components/Welcome";
import MottoCarousel from "@/components/MottoCarousel";
import BootcampFooter from "@/components/BootcampFooter";
import { getMottos } from "@/lib/db";

export default function Home() {
  const mottos = getMottos();
  const mottoTexts = mottos.map((m) => m.text);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        {mottoTexts.length > 0 ? <MottoCarousel mottos={mottoTexts} /> : <Welcome />}
      </div>
      <BootcampFooter />
    </main>
  );
}
