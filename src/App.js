
import './App.css';
import { Mode } from './components/ChangeTheme';
import { ChangeMode } from './components/DarkMode';

function App() {
 const testUrl = process.env.REACT_APP_TEST_URL;
  return (
    <div className="App">
      <h1>Context url:{testUrl}</h1>
      <Mode/>
      <ChangeMode/>
    </div>
  );
}

export default App;
