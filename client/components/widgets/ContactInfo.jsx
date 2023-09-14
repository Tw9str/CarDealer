import {
  LocationOn,
  PhoneInTalk,
  WhatsApp,
  AccessTime,
  Email,
} from "@mui/icons-material";
import Link from "next/link";

export default function ContactInfo({ time, whatsapp, email, address }) {
  return (
    <>
      {time && (
        <p>
          <AccessTime />
          Elke dag 09.00 - 19.00 uur
        </p>
      )}
      {address && (
        <Link href="https://goo.gl/maps/nVYuhp72bC6yCS877" target="_blank">
          <LocationOn />
          <address>Address xx, xxxx AB example</address>
        </Link>
      )}
      <Link href="tel:+31xx-xxxxxxxx">
        <PhoneInTalk />
        +31 xx-xxxxxxxx
      </Link>
      {whatsapp && (
        <Link href="https://wa.me/31000000" target="_blank">
          <WhatsApp />
          +31 xxxxxxxx
        </Link>
      )}
      {email && (
        <Link href="mailto:info@autoplannernederland.nl">
          <Email />
          contact@exmaple.com
        </Link>
      )}
    </>
  );
}
