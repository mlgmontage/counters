import { CounterCard } from "entities/counters";
import { countersSelector } from "entities/counters/model/counters";
import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  const [color, setColor] = useState(0);
  const counters = useSelector(countersSelector);

  useEffect(() => {
    setColor(Math.floor(Math.random() * 360));
  }, []);

  const bg: CSSProperties = {
    backgroundColor: `hsl(${color}, 20%, 90%)`,
  };

  const text: CSSProperties = {
    color: `hsl(${color}, 90%, 20%)`,
  };

  return (
    <div style={{ ...bg, ...text }}>
      <div className="container">
        <center>
          <h1>Counters</h1>
        </center>
        <div className={styles.root}>
          <Link to="/create">
            <CounterCard>Create counter</CounterCard>
          </Link>
          {counters.map((counter, i) => (
            <CounterCard key={i}>
              <Link to={`/counter/${i}`}>{counter.title}</Link>
              <br />
              <br />
              {counter.description}
            </CounterCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
