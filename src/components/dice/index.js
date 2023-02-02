import styles from "./styles.module.css";
import emptyDice from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";
import { useState } from "react";

export function Dice () {
  const [diceResult, setDiceResult] = useState(emptyDice);
  function rollDice () {
    const possibleOutcomes = [dice1, dice2, dice3, dice4, dice5, dice6], randIndex = Math.round(Math.random()*5);
    setDiceResult(emptyDice);
    setTimeout(() => {setDiceResult(possibleOutcomes[randIndex])}, 1000);
  };
  return (<img className={styles.dice} src={diceResult} alt="dice result" onClick={rollDice} />)
};

