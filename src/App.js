import './App.css';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';
import DeBounceComponent from './components/DeBounceComponent';

function App() {
  return (
    <div className="App">
      <ToggleComponent />
      <TimeoutComponent />
      <DeBounceComponent />
    </div>
  );
}

export default App;
