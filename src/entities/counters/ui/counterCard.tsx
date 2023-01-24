import { PropsWithChildren } from "react";
import styles from "./counterCard.module.css";

export const CounterCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
