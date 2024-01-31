
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './heder';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './hero';
import TableData from './table';
import YourComponent from './registaion';
import Declaration from './Declaration';


function App() {
  return (
    <div className="App">
      <Container>
      <Header/>
      <Hero/>
     <TableData/>
    <YourComponent/>
<Declaration/>

      </Container>
    </div>
  );
}

export default App;
