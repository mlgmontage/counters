import { countersSelector } from "entities/counters/model/counters";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  const counters = useSelector(countersSelector);

  return (
    <div className={styles.root}>
      {counters.map((counter, i) => (
        <Link key={i} to={`/counter/${i}`}>
          {counter.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
