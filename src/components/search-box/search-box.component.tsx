"use client";

import { FormEvent, ReactElement, useState } from "react";

import SearchLine from "@/icons/SearchLine";
import LocationLine from "@/icons/LocationLine";

import styles from "./search-box.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBoxComponent(): ReactElement {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [search, setSearch] = useState(q);
  const router = useRouter();
  const pathname = usePathname();

  function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim().length === 0) {
      params.delete("q");
    } else {
      params.set("q", search);
    }
    router.push(`${pathname}?${params.toString()}`);

    // if (search.trim().length === 0) {
    //   query = deleteQueryString(searchParams, "q");
    // } else {
    //   query = createQueryString(searchParams, "q", search);
    // }
    // router.push("/search" + `?${query}`);
  }

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <SearchLine />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <LocationLine />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
