import { CounterCard } from "entities/counters";
import { countersSelector } from "entities/counters/model/counters";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  const counters = useSelector(countersSelector);

  return (
    <div className="container">
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
  );
};

export default Home;
