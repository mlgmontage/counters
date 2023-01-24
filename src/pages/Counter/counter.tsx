import styles from "./counter.module.css";
import { increment, useCounter } from "entities/counters";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CSSProperties, useEffect } from "react";

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
    return () => document.removeEventListener("keypress", press);
  }, []);

  const bg: CSSProperties = {
    backgroundColor: `hsl(${counter.count}, 20%, 90%)`,
  };

  const text: CSSProperties = {
    color: `hsl(${counter.count}, 90%, 20%)`,
  };

  return (
    <div className={styles.root} style={bg}>
      <div style={text}>
        <center>
          <h1 className={styles.counter}>{counter.count}</h1>
          <h4>{counter.title}</h4>
          <small>{counter.description}</small>
        </center>
      </div>
    </div>
  );
};

export default Counter;
