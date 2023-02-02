import styles from "./styles.module.css";
import { useState } from "react";


export function Carousel (props) {
  const [imgSel, setImgSel] = useState(props.images[0]);
  function moveLeft () {
    const cI = props.images.indexOf(imgSel)
    if (cI === 0) {
      setImgSel(props.images[props.images.length - 1]);
    } else {
      setImgSel(props.images[cI - 1]);
    };
  };
  function moveRight () {
    const cI = props.images.indexOf(imgSel)
    if (cI === props.images.length - 1) {
      setImgSel(props.images[0]);
    } else {
      setImgSel(props.images[cI + 1]);
    };
  };
  return (
    <div>
      <img src={imgSel} alt="I've tried..." className={styles.img}></img>
      <button className={styles.button} onClick={moveLeft}>Left</button>
      <button className={styles.button} onClick={moveRight}>Right</button>
    </div>
  );
};
