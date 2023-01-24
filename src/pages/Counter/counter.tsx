import styles from "./counter.module.css";
import { increment, useCounter } from "entities/counters";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Counter = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  if (!id) return <div>Error: id not provided</div>;

  const counter = useCounter(Number(id));

  useEffect(() => {
    const press = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        dispatch(increment(Number(id)));
      }
    };

    document.addEventListener("keypress", press);

    return () => {
      document.removeEventListener("keypress", press);
    };
  }, []);

  return (
    <div className={styles.root}>
      <h1>
        {counter.title} {counter.count}
      </h1>
    </div>
  );
};

export default Counter;
