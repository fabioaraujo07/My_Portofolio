import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Pessoa foto="https://www.w3schools.com/w3images/avatar2.png" nome="Fábio da Cunha" idade="22" cargo="Estudante de cibersegurança" />
      <List />
    </div>
  );
}

export default App;
