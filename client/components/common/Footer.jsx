import Image from "next/image";
import ContactInfo from "../widgets/ContactInfo";
import Link from "next/link";
import Social from "../widgets/Social";

export default function Footer() {
  return (
    <footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="contact-info">
            <h1>
              Car<span>Dealer</span> NL
            </h1>
            <ContactInfo time address whatsapp email />
          </div>
          <div className="links col">
            <h2>Links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/occasions">Occasions</Link>
              </li>
              <li>
                <Link href="/diensten">Diensten</Link>
              </li>
              <li>
                <Link href="/over-ons">Over ons</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="services col">
            <h2>Diensten</h2>
            <ul>
              <li>
                <Link href="/diensten#voordelen">Voordelen</Link>
              </li>
              <li>
                <Link href="/diensten#inkopen">Inkopen</Link>
              </li>
              <li>
                <Link href="/diensten#garantie">Garantie</Link>
              </li>
              <li>
                <Link href="/diensten#importeren">Auto Importeren</Link>
              </li>
            </ul>
          </div>
          <div className="social col">
            <h2>Socials</h2>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}
