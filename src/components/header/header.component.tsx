"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLinkComponent } from "../button/button.component";

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
  const isAuthPage = pathname.includes("/auth");

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
      {!isAuthPage && (
        <ButtonLinkComponent
          variant="primary"
          shape="outlined"
          className={styles.cta}
          href="/auth/sign-in"
        >
          ورود | ثبت‌نام
        </ButtonLinkComponent>
      )}
    </header>
  );
}
