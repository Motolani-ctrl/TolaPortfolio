import logo from './logo.svg';
import './App.css';
import { ButtonComponent, Button1 } from './button'
import {Prompt, Counter} from './Counter'
import { RectangleComponent, CircleComponent } from './trustedBusinesses'
import { BankSlider } from './slider'
import Move from './Movement'

function App() {
  return (
    <div className="App">
      <Move />
      <BankSlider />
      <RectangleComponent/>
      <CircleComponent/>

      <ButtonComponent/>

      <Button1 number={2} bg={"b1-yes"} />
      <Button1 number={6} letter={"A"} bg={"b1-no"} />
      <Counter></Counter>
      <Prompt></Prompt>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CircleComponent/>
    </div>
  );
}

export default App;
