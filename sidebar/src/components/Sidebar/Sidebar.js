import React, { Component } from 'react';
//Import Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//Importando ícones
import GroupIcon from '@material-ui/icons/Group';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PrintIcon from '@material-ui/icons/Print';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
//Importando estilo
import './Sidebar.css';
//Importando LOGO
import logoGraphos from '../../static/imgs/graphos.png';

export default class Sidebar extends Component {
  render() {
    return (
        <div className="main-content">
            <img className="logo-graphos" src={logoGraphos} alt="Enviar publicação"/>
            <List className="list-menu">
            <ListItem button key="item-clients">
              <ListItemIcon><GroupIcon/></ListItemIcon>
              <ListItemText>Clientes</ListItemText>
            </ListItem>
            <ListItem button key="item-employees">
              <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
              <ListItemText>Colaboradores</ListItemText>
            </ListItem>
            <ListItem button key="item-services">
              <ListItemIcon><PrintIcon/></ListItemIcon>
              <ListItemText>Serviços</ListItemText>
            </ListItem>
            <ListItem button key="item-reports">
              <ListItemIcon><TrendingUpIcon/></ListItemIcon>
              <ListItemText>Relatórios</ListItemText>
            </ListItem>
        </List>
        </div>
    );
  }
}
