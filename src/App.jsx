import './App.scss';
import Heading from "./components/Heading/Heading"
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="app">
      <header className="App-header">
        <Heading />
      </header>
      <Main />
    </div>
  );
}

export default App;
