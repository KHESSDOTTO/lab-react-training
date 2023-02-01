import styles from "./styles.module.css";

export function Rating (props) {
  let content = [..."☆☆☆☆☆"].map((cE, cI) => {
    if (cI+1 <= Math.round(Number(props.children))) {return "★"};
    return cE;
  }).join("");
  return (<div className={styles.ratingDiv}>{content}</div>);
};

