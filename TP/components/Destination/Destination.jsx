
import styles from "./Destination.module.css";
import { useState } from "react";

function Destination(props) {

    const [afficher, setAfficher] = useState(false);

    function generateDetail() {
        setAfficher(!afficher);
    }

    return (
        <div className={styles.destination}>

            <img
                className={styles.image}
                src={props.image}
                alt={props.nom}
            />

            <div className={styles.content}>

                <h2 className={styles.titre}>
                    {props.nom}
                </h2>

                <p className={styles.pays}>
                    {props.pays}
                </p>

                {afficher && (
                    <p className={styles.description}>
                        {props.description}
                    </p>
                )}

                <h3 className={styles.prix}>
                    {props.prix} DT
                </h3>

                <button onClick={generateDetail}>
                    {afficher ? "Masquer les détails" : "Afficher les détails"}
                </button>

            </div>
        </div>
    );
}

export default Destination;
