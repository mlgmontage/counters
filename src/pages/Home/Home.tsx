import { CounterCard } from "entities/counters";
import { countersSelector } from "entities/counters/model/counters";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  const counters = useSelector(countersSelector);

  return (
    <div className={styles.root}>
      {counters.map((counter, i) => (
        <CounterCard key={i}>
          <Link to={`/counter/${i}`}>{counter.title}</Link>
          <br />
          <br />
          {counter.description}
        </CounterCard>
      ))}
    </div>
  );
};

export default Home;
