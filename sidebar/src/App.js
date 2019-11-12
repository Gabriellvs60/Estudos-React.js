import React from 'react';
//Importando Material UI
import Grid from '@material-ui/core/Grid';
//Importando componentes
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Table from '../src/components/Table/Table';
import Searchbar from '../src/components/Searchbar/Searchbar';
//Importando Estilo
import './App.css';


function App() {
  return ( 
    <div className="content">
      <Header/>
      <Grid item xs={6}>
          <Sidebar/>
        </Grid>
        <Grid item xs={6}>
          <Table/>
          
        </Grid>
    </div> 
  );
}

export default App;
