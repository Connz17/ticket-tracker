import './App.scss';
import Footing from './components/Footing/Footing';
import Heading from "./components/Heading/Heading"
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="app">
      <header className="App-header">
        <Heading />
      </header>
      <Main />
      <footer className="App-footer">
        <Footing />
      </footer>
    </div>
  );
}

export default App;
