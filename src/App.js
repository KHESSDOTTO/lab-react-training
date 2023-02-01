import './App.css';
import { IdCard } from './components/idCard';
import { Greetings } from './components/greetings';
import { Random } from './components/random';
import { BoxColor } from './components/boxColor';
import { CreditCard } from './components/creditCard';
import { Rating } from './components/rating';

function App() {
  return (
    <div className="App">
      <IdCard firstName="Charles" lastName="Oliveira" gender="male" height={180} birth="2003-10-01"
      picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <Greetings lang="en">Donald</Greetings>
      <Random min={5} max={12} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Master Card"
        number="1234123412341234"
        expirationMonth={12}
        expirationYear={2031}
        bank="City"
        owner="Joffrey Jones"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
