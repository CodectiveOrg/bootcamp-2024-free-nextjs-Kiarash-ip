"use client";

import { FormEvent, ReactElement, useEffect, useRef, useState } from "react";

import SearchLine from "@/icons/SearchLine";
import LocationLine from "@/icons/LocationLine";

import styles from "./search-box.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { CloseFill } from "@/icons/CloseFill";

export default function SearchBoxComponent(): ReactElement {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [search, setSearch] = useState(q || "");
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!q) {
      setSearch("");
    }
  }, [q]);

  function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim().length === 0) {
      params.delete("q");
    } else {
      params.set("q", search);
    }
    router.push(`/search?${params.toString()}`);
  }

  function clearButtonClickHandler() {
    setSearch("");

    if (q) {
      formRef.current?.submit();
    }
  }

  return (
    <form
      ref={formRef}
      className={styles["global-search-box"]}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.prefix}>
        <SearchLine />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        {!!search && (
          <button
            type="button"
            className={styles.clear}
            onClick={clearButtonClickHandler}
          >
            <CloseFill className={styles.icon} />
          </button>
        )}
      </div>
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
