import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="head">
                Pedidos
                <div className="actions">
                    <p className="btnAction">Ordenar Por</p>
                    <p className="btnAction">Filtrar Por Serviço</p>
                    <input value="Pesquisar" type="text" className="inputSearch"/>
                </div>
            </div>
        );
    }
}

export default Header;