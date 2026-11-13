
import styles from "./Destinations.module.css";
import Destination from "../Destination";
import DestinationList from "../../../Data/DestinationList";

function Destinations() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Nos destinations</h1>

      <div className={styles.destinations}>
        {
          DestinationList.map((d) => (
            <Destination
              key={d.id}
              image={d.image}
              nom={d.nom}
              pays={d.pays}
              description={d.description}
              prix={d.prix}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Destinations;
