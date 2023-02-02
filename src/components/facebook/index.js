import styles from "./styles.module.css";
import profiles from "../../data/berlin.json";

export function FaceBook() {
  return(
    <section className={styles.profilesSection} id="profilesSection">
      {profiles.map(cE =>
        <article className={styles.singleProfile}>
          <img src={cE.img} alt="person`s face" className={styles.img}></img>
          <div className={styles.textPart}>
            <p><span className={styles.title}>First name: </span>{cE.firstName}</p>
            <p><span className={styles.title}>Last name: </span>{cE.lastName}</p>
            <p><span className={styles.title}>Country: </span>{cE.country}</p>
            <p><span className={styles.title}>Type: </span>{cE.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </article>
        )}
    </section>
  );
};

