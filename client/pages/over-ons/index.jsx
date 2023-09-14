import Panel from "@/components/widgets/Panel";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <Panel />
        <h1>Over ons</h1>
        <div className={styles.content}>
          <p>
            Welkom bij Car Dealer - Uw Betrouwbare Bron voor
            Kwaliteitsvoertuigen Bij Car Dealer zijn we gepassioneerd over
            auto's en toegewijd om u de beste automotive oplossingen te bieden.
            Met jarenlange ervaring in de branche hebben we onszelf gevestigd
            als een vertrouwde naam in de wereld van auto's.
          </p>
          <div className={styles.mission}>
            <h2>Onze missie</h2>
            <p>
              Uw Automotive Dromen Realiseren Bij Car Dealer is onze missie
              duidelijk en onwankelbaar: onze klanten in staat stellen om hun
              automotive dromen te verwezenlijken. We begrijpen dat een auto
              meer is dan alleen een vervoermiddel; het is een weerspiegeling
              van uw persoonlijkheid, stijl en ambities. Daarom zijn we
              toegewijd aan het leveren van uitzonderlijke voertuigen en
              diensten die aansluiten bij uw unieke behoeften. Onze missie wordt
              gedreven door een reeks kernwaarden: Kwaliteitsgarantie: We
              selecteren en bieden alleen voertuigen van de hoogste kwaliteit om
              uw gemoedsrust op de weg te waarborgen. Klantgerichte aanpak: Uw
              tevredenheid staat bij ons voorop. We zijn er om u te begeleiden
              en ondersteunen bij elke fase van uw auto-koopreis. Transparantie:
              We geloven in transparantie in prijsstelling en informatie, zodat
              u geïnformeerde beslissingen kunt nemen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
