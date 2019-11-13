import React, { Component } from 'react';
//Import Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//Importando ícones
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupAddIcon from '@material-ui/icons/GroupAdd';//Importando estilo
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
        <div className="main-content">
            <List className="list-menu">
            <ListItem button key="item-clients">
              <ListItemIcon><DashboardIcon/></ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem button key="item-employees">
              <ListItemIcon><EventNoteIcon/></ListItemIcon>
              <ListItemText>Pedidos</ListItemText>
            </ListItem>
            <ListItem button key="item-services">
              <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
              <ListItemText>Clientes</ListItemText>
            </ListItem>
            <ListItem button key="item-reports">
              <ListItemIcon><GroupAddIcon/></ListItemIcon>
              <ListItemText>Colaboradores</ListItemText>
            </ListItem>
        </List>
        </div>
    );
  }
}
