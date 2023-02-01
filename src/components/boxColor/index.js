import styles from "./styles.module.css";

export function BoxColor (props) {
  const color = "rgb("+props.r+ " " +props.g+ " " +props.b+")";
  return (<div className= {styles.boxColor} style={{backgroundColor: color}}></div>);
};
