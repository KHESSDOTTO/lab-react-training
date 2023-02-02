import styles from "./styles.module.css";
import { useState } from "react";

export function ClickablePicture (props) {
  const [srcImg, setSrcImg] = useState(props.img);
  function changeImg () {
    if (srcImg === props.img) {setSrcImg(props.imgClicked)} else {setSrcImg(props.img)};
  };
  console.log("props.img:");
  console.log(props.img);
  console.log("props.imgClicked:");
  console.log(props.imgClicked);
  return (<img src={srcImg} alt="I tried..." className={styles.possibleImgs} onClick={changeImg} />);
}
