import logo from './logo.svg';
import './App.css';
import Silabus from './components/Silabus';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
      </header>
      <Silabus />
    </div>
  );
}

export default App;
