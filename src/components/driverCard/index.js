import styles from "./styles.module.css"

export function DriverCard(props) {
  const rating = [..."☆☆☆☆☆"].map((cE, cI) => {if (Math.round(props.rating) >= cI+1) {return "★"} return cE}).join("");
  return (
    <article className={styles.article}>
      <img src={props.img} alt="Drivers face" className={styles.circularImg} />
      <div className={styles.infoDiv}>
        <h2>{props.name}</h2>
        <p className={styles.stars}>{rating}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </article>
  )
}

