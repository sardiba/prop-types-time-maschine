import './App.css';
import { TimeMachine } from './components/TimeMachine';

function App() {
  function sayHello() {
    console.log('Hey!');
  }
  return (
    <div className="App">
      {/*
       * Help Doc to repair the TimeMachine!
       * Some of the inputs seem wrong.
       *
       * Instead of fixing the props blindly,
       * Command + Click on the TimeMachine
       * and take a look into the nitty gritty.
       */}
      <TimeMachine
        fluxCapacitorVoltage="300V"
        spaceTimeDomain="Edison-Delta"
        onTemporalDisplacement={sayHello()}
      />
    </div>
  );
}

export default App;
