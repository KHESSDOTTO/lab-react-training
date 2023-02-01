import logo from './logo.svg';
import './App.css';
import { IdCard } from './components/idCard';
import { Greetings } from './components/greetings';
import { Random } from './components/random';

function App() {
  return (
    <div className="App">
      <IdCard firstName="Charles" lastName="Oliveira" gender="male" height={180} birth="2003-10-01"
      picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <Greetings lang="en">Donald</Greetings>
      <Random min={5} max={12} />
    </div>
  );
}

export default App;
