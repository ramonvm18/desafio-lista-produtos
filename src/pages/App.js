import { Container } from 'react-bootstrap';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List';

function App() {

  return (
    <Container>
      <h1>Lista de Produtos</h1>
      <hr />
      <SearchBar  />
      <List />
    </Container>
  );
}

export default App;
