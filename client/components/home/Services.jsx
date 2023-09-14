import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h1>Onze diensten</h1>
        <div className={styles.servicesContainer}>
          <Link href="/diensten#voordelen">
            <h2>Basis Pakket:</h2>
            <ul>
              <li>
                Essentiële Websitefunctionaliteit: Begin met de basisfuncties.
              </li>
              <li>Standaard Ontwerpopties: Kies uit standaardsjablonen.</li>
              <li>Beperkte Pagina's: Maximaal 5 pagina's.</li>
              <li>Eenvoudig Contactformulier: Basiscontactformulier.</li>
              <li>Basis SEO-opties: Eenvoudige SEO-tools.</li>
              <li>Beperkte Opslagruimte: Beperkte opslagruimte.</li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#garantie">
            <h2>Standaard Pakket</h2>
            <ul>
              <li>
                Uitgebreide Websitefunctionaliteit: Meer functies, inclusief
                e-commerce.
              </li>
              <li>
                Aanpasbare Ontwerpmogelijkheden: Personaliseer uw website.
              </li>
              <li>Onbeperkte Pagina's: Zoveel pagina's als u wilt.</li>
              <li>Geavanceerd Contactformulier: Complexe formulieren.</li>
              <li>Uitgebreide SEO-opties: Geavanceerde SEO-tools.</li>
              <li>Ruime Opslagruimte: Meer opslagruimte.</li>
              <li>Prioritaire Klantenondersteuning: Snelle ondersteuning.</li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#inkopen">
            <h2>Premium Pakket:</h2>
            <ul>
              <li>
                Volledige Websitefunctionaliteit: Alle functies, inclusief
                e-commerce.
              </li>
              <li>Volledig Aanpasbaar Ontwerp: Volledige aanpassing.</li>
              <li>Onbeperkte Pagina's en Subdomeinen: Geen limieten.</li>
              <li>
                Geavanceerd Contactformulier met Automatisering:
                Geautomatiseerde formulieren.
              </li>
              <li>Uitgebreide SEO-opties en Professioneel.</li>
              <li>
                Ruime Opslagruimte voor Media: Meer opslagruimte voor media.
              </li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#importeren">
            <h2>Ondernemers Pakket:</h2>
            <ul>
              <li>Alles-in-één Zakelijke Oplossing: Zakelijke tools.</li>
              <li>Volledige Aanpassing en Branding: Brandingopties.</li>
              <li>
                Onbeperkte Pagina's, Subdomeinen en E-mailaccounts: Geen
                beperkingen.
              </li>
              <li>Geavanceerd Contactformulier met Workflowautomatisering</li>
              <li>
                Professioneel Trefwoordonderzoek en SEO-optimalisatie:
                Professioneel SEO-onderzoek.
              </li>
              <li>
                Ruime Opslagruimte voor Media en Documenten: Veel opslagruimte.
              </li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
