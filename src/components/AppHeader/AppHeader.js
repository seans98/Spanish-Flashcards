import React from "react";
import './AppHeader.css';
import logo from '../../logo.svg';

const AppHeader = ({title}) =>(
  <header className="App-header">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" className="App-logo" alt="logo" />
    <p>{title}</p>
  </header>
);

export default AppHeader;

