import './App.css';
import { IdCard } from './components/idCard';
import { Greetings } from './components/greetings';
import { Random } from './components/random';
import { BoxColor } from './components/boxColor';
import { CreditCard } from './components/creditCard';

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
    </div>
  );
}

export default App;
