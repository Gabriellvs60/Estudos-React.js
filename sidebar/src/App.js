import React from 'react';
//Importando componentes
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Table from '../src/components/Table/Table';

//Importando Estilo
import './App.css';


function App() {
  return ( 
    <div className="content">
      <Header/>
      <Sidebar/>
      <Table/>
    </div> 
  );
}

export default App;
