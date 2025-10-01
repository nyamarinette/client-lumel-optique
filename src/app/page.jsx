import SectionJournaux from "@/components/SectionJournaux";
import SectionAccueil from "@/components/SectionAccueil";
import AvisClientsContenu from "@/components/AvisClientsContenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <SectionAccueil />
        <SectionJournaux />
        <AvisClientsContenu />
      </main>
    </div>
  );
}