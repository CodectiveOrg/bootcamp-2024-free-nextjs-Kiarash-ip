"use client";

import { FormEvent, ReactElement, useState } from "react";

import SearchLine from "@/icons/SearchLine";
import LocationLine from "@/icons/LocationLine";

import styles from "./search-box.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString, deleteQueryString } from "@/utils/utils";

export default function SearchBoxComponent(): ReactElement {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [search, setSearch] = useState(q);
  const router = useRouter();

  function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let query = "";
    if (search.trim().length === 0) {
      query = deleteQueryString(searchParams, "q");
    } else {
      query = createQueryString(searchParams, "q", search);
    }
    router.push("/search" + `?${query}`);
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
