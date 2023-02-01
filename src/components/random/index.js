import styles from "./styles.module.css"

export function Random (props) {
  const min = props.min, max = props.max;
  let result = Math.round(Math.random()*max);
  if (result < min) {result = Math.floor(min)};
  return (<p className={styles.randOutput}>Random number between {min} and {max} => {result}</p>);
};

