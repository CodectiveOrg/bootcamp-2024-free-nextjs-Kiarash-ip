import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import idkLogo from "@/assets/svg/idk.svg";
import certificateLogo from "@/assets/svg/certificate.svg";
import enamadLogo from "@/assets/svg/enamad.svg";

import LinkedinFill from "@/icons/LinkedinFill";
import TelegramFill from "@/icons/TelegramFill";
import YoutubeFill from "@/icons/YoutubeFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر من</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="Certificate Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="Enamad Logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/Codective" target="_blank">
              <TelegramFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/bijanprogrammer/"
              target="_blank"
            >
              <LinkedinFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@BijanProgrammer"
              target="_blank"
            >
              <YoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
}
