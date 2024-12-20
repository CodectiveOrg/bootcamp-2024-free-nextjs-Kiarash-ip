"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

const NAVIGATION_MENU = [
  {
    id: 0,
    label: "خانه",
    href: "/",
  },
  {
    id: 1,
    label: "جستجو",
    href: "/search",
  },
];

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {NAVIGATION_MENU.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.href}
                className={clsx(pathname === navItem.href && styles.active)}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
