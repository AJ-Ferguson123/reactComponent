import './App.css';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';
import DeBounceComponent from './components/DeBounceComponent';
import UpdateEffectComponent from './components/UpdateEffectComponent';
import ArrayComponent from './components/ArrayComponent';

function App() {
  return (
    <div className="App">
      <ToggleComponent />
      <TimeoutComponent />
      <DeBounceComponent />
      <UpdateEffectComponent />
      <ArrayComponent />
    </div>
  );
}

export default App;
