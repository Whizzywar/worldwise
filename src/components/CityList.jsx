import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Cityitem from "./Cityitem";

function CityList({ cities, isloading }) {
  if (isloading) return <Spinner />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
