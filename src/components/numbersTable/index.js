import styles from "./styles.module.css";

export function NumbersTable (props) {
  const {limit} = props, arr = [];
  for (let i = 1; i <= limit; i++) {arr.push(i)};
  console.log(arr);
  return (
    <div className={styles.biggerDiv}>
      {arr.map(cE => cE % 2 === 0 ? <div className={`${styles.redDiv} ${styles.innerDiv}`}>{cE}</div> :
      <div className={styles.innerDiv}>{cE}</div>)};
    </div>
  );
};


