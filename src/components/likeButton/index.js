import { useState } from "react";
import styles from "./styles.module.css";

export function LikeButton () {
  function addLike () {
      setLikes(likes+1);
  };
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={addLike} className={styles.likeButton}>{likes} Likes</button>
  )
}
