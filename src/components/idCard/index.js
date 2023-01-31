import styles from "./style.module.css"

export function IdCard (props) {
  return (
    <div className={styles.idCardDiv}>
      <img src={props.picture} alt="id" />
      <ul className={styles.uList}>
        <li><strong>First name: </strong>{props.firstName}</li>
        <li><strong>Last name: </strong>{props.lastName}</li>
        <li><strong>Gender: </strong>{props.gender}</li>
        <li><strong>Height: </strong>{props.height}</li>
        <li><strong>Birth: </strong>{String(new Date(props.birth))}</li>
      </ul>
    </div>
  )
}
