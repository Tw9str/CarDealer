import Link from "next/link";
import { Facebook, Instagram } from "@mui/icons-material";
import styles from "@/styles/Social.module.css";
export default function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <Link href="https://www.facebook.com/carDealer" target="_blank">
          <Facebook /> Facebook
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/mystic.js/" target="_blank">
          <Instagram /> Instagram
        </Link>
      </li>
    </ul>
  );
}
