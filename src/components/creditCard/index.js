import styles from "./styles.module.css";

export function CreditCard (props) {
  let logoPath;
  if (props.type.toLowerCase() === "visa") {
    logoPath = "../../assets/images/visa.png";
  } else if (props.type.toLowerCase() === "master card") {
    logoPath = "../../assets/images/master-card.svg";
  };
  let cardNumber = "**** **** **** "
  if(props.number) {
    for (let i = 4; i > 0; i--) {cardNumber += props.number[props.number.length - i]};
  };

  const header = <header className={styles.header}><img src={logoPath} alt={props.type} /></header>
  const main = <main className={styles.main}>{cardNumber}</main>
  const footer =  <footer className={styles.footer}>
    <p className={styles.footerContent}>Expires {props.expirationMonth}/{String(props.expirationYear)[2] + String(props.expirationYear)[3]}</p>
    <p className={styles.footerContent}>{props.bank}</p>
    <p className={styles.footerContent}>{props.owner}</p>
  </footer>

  return (
    <div className={styles.creditCard} style={{backgroundColor: props.bgColor, color: props.color}}>
      {header}
      {main}
      {footer}
    </div>
  );
};
