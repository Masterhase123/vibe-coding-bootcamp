import Welcome from "@/components/Welcome";
import MottoCarousel from "@/components/MottoCarousel";
import BootcampFooter from "@/components/BootcampFooter";
import sprueche from "@/lib/sprueche";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        {sprueche.length > 0 ? <MottoCarousel mottos={sprueche} /> : <Welcome />}
      </div>
      <BootcampFooter />
    </main>
  );
}
