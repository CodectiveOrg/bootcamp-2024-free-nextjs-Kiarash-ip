import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

import CloseLine from "@/icons/CloseLine";

import styles from "./drawer.module.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "bottom";
  title?: string;
}

export function Drawer({
  isOpen,
  onClose,
  children,
  position = "left",
  title = "",
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          ref={nodeRef}
          className={`${styles.drawer} ${styles[`drawer--${state}`]}`}
        >
          <div className={styles["drawer__backdrop"]} />
          <div
            ref={drawerRef}
            className={`${styles["drawer__content"]} ${styles[`drawer__content--${position}`]} ${
              styles[`drawer__content--${state}`]
            }`}
          >
            <div className={styles.header}>
              {title}
              <button onClick={onClose} className={styles.close}>
                <CloseLine />
              </button>
            </div>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      )}
    </Transition>,
    document.body,
  );
}
