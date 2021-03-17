import logo from './logo.svg';
import Header from './Components/Header.js';
import Cards from './Components/Cards.js';
import { Grid } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
        <Grid container spacing={4}>
            <Cards />
        </Grid>
    </div>
  );
}

export default App;
