import './App.css';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';
import DeBounceComponent from './components/DeBounceComponent';
import UpdateEffectComponent from './components/UpdateEffectComponent';
import ArrayComponent from './components/ArrayComponent';
import PreviousComponent from './components/PreviousComponent';
import StateWithHistoryComponent from './components/StateWithHistoryComponent';
import StorageComponent from './components/StorageComponent';

function App() {
  return (
    <div className="App">
      <ToggleComponent />
      <TimeoutComponent />
      <DeBounceComponent />
      <UpdateEffectComponent />
      <ArrayComponent />
      <PreviousComponent />
      <StateWithHistoryComponent />
      <StorageComponent />
    </div>
  );
}

export default App;
