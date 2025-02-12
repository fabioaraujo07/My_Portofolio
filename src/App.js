import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Pessoa foto="https://www.w3schools.com/w3images/avatar2.png" nome="João" idade="25" cargo="Desenvolvedor" />
      <List />
    </div>
  );
}

export default App;
