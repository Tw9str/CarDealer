import Panel from "@/components/widgets/Panel";
import ContactInfo from "@/components/widgets/ContactInfo";
import Map from "@/components/widgets/Map";
import styles from "@/styles/Services.module.css";
import Social from "@/components/widgets/Social";

export default function Diensten() {
  return (
    <section className={styles.services}>
      <div className="container">
        <Panel />
        <h1>Diensten</h1>
        <section id="garantie">
          <h2>Pakketten</h2>
          <div className={styles.bundles}>
            <div>
              <span>Basispakket</span>
              <span>gratis</span>
              <span></span>
              <h3>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet:</h3>
              <ul>
                <li>Eenvoudige Website Setup</li>
                <li>Basis SEO-tools</li>
                <li>Aanpasbare Templates</li>
                <li>Responsief Ontwerp</li>
              </ul>
              <p>
                Eenvoudige Website Setup: Krijg uw website snel up and running
                met essentiële functies zoals domeinregistratie, hosting en een
                eenvoudige websitebouwer. Aanpasbare Templates: Kies uit een
                selectie professioneel ontworpen sjablonen die u eenvoudig kunt
                aanpassen aan de identiteit van uw merk. Responsief Ontwerp:
                Zorg ervoor dat uw website er geweldig uitziet op alle
                apparaten.
              </p>
            </div>
            <div>
              <span>
                Premium Pakket <small>(extra optie)</small>
              </span>
              <span>€ 39</span>
              <span></span>
              <p>
                Uitgebreide Websitefunctionaliteit: Profiteer van geavanceerde
                functies, waaronder e-commerce mogelijkheden voor de verkoop van
                auto's, reserveonderdelen of accessoires. Maatwerk en Branding:
                Creëer een unieke online aanwezigheid met volledig aanpasbare
                ontwerpen en brandingopties die passen bij uw autodealerbedrijf!
              </p>
              <ul>
                <li>Onbeperkte Pagina's</li>
                <li>Krachtige SEO-tools</li>
              </ul>
              <p>
                Onbeperkte Pagina's: Maak en beheer zoveel pagina's als u wilt
                om uitgebreide informatie over uw autoaanbod en services te
                verstrekken. Krachtige SEO-tools: Verbeter uw positie in
                zoekmachines met geavanceerde SEO-tools, inclusief
                trefwoordanalyse en optimalisatieadvies.
              </p>
            </div>
          </div>
        </section>
        <section id="inkopen">
          <h2>Premium Lidmaatschap</h2>
          <p>
            Het Premium Lidmaatschap van Car Dealer biedt u exclusieve voordelen
            en een uitgebreide ervaring met onze autowebsite. Geniet van
            premiumfuncties om uw autokoop- en verkoopproces te verbeteren.
            Voorrang bij Autolijsten: Als Premium Lid krijgt u als eerste
            toegang tot nieuwe autolijsten voordat ze openbaar beschikbaar zijn,
            zodat u geen enkele geweldige deal mist. Uitgebreide Zoekopties:
            Ontgrendel geavanceerde zoekfilters om snel het specifieke voertuig
            te vinden dat aan uw criteria voldoet, of het nu gaat om merk,
            model, prijsklasse of meer.
          </p>
          <div className={styles.contact}>
            <ContactInfo whatsapp email />
          </div>
        </section>
        <section id="importeren">
          <h2>Abonnementspakketten voor uw Website Succes</h2>
          <div className={styles.bundles}>
            <div>
              <h3>Basis Pakket: </h3>
              <ul>
                <li>
                  Essentiële Websitefunctionaliteit: Begin met de basisfuncties.
                </li>
                <li>Standaard Ontwerpopties: Kies uit standaardsjablonen.</li>
                <li>Beperkte Pagina's: Maximaal 5 pagina's.</li>
                <li>Eenvoudig Contactformulier: Basiscontactformulier.</li>
                <li>Basis SEO-opties: Eenvoudige SEO-tools.</li>
                <li>Beperkte Opslagruimte: Beperkte opslagruimte.</li>
                <li>
                  Standaard Klantenondersteuning: Ondersteuning tijdens
                  kantooruren.
                </li>
                <li>Maandelijkse Analyse: Bezoekersstatistieken per maand.</li>
                <li>Basis Beveiliging: Basisbeveiliging.</li>
                <li>Geen Transactiekosten: Geen extra transactiekosten.</li>
              </ul>
              <div>€ 129</div>
            </div>
            <div>
              <h3>Standaard Pakket</h3>
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
                <li>Real-time Analyse: Real-time statistieken.</li>
                <li>Verbeterde Beveiliging: Sterkere beveiliging.</li>
                <li>Lage Transactiekosten: Lagere kosten.</li>
              </ul>
              <div>€ 339</div>
            </div>
          </div>
          <div className={styles.features}>
            <div>
              <h3>Premium Pakket</h3>
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
                <li>
                  24/7 Premium Klantenondersteuning: Rond-de-klok-ondersteuning.
                </li>
                <li>
                  Geavanceerde Analyse en Conversietracking: Gedetailleerde
                  analyse.
                </li>
              </ul>
              <div>€ 799</div>
            </div>
            <div>
              <h3>Ondernemers Pakket</h3>
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
                  Ruime Opslagruimte voor Media en Documenten: Veel
                  opslagruimte.
                </li>
                <li>
                  24/7 Prioritaire Zakelijke Ondersteuning:
                  Rond-de-klok-ondersteuning.
                </li>
                <li>
                  Uitgebreide Analyse en ROI-tracking: Gedetailleerde analyse.
                </li>
              </ul>
              <div>€ 999</div>
            </div>
          </div>
        </section>
        <div className={styles.social}>
          <h2>Volg ons</h2>
          <Social />
        </div>
        <Map />
      </div>
    </section>
  );
}
