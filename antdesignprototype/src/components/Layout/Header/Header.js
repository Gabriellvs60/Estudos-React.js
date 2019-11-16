import React, { Component } from 'react';
import './Header.css';
import { Row, Col } from 'antd';

class Header extends Component {
    render() {
        return (
            <div className="head">
                <div className="pedidos">
                Pedidos
                </div>

                <div className="actions">
                    <button className="btnAction">Ordenar Por</button>
                    <button className="btnAction">Filtrar Por Serviço</button>
                    <input value="Pesquisar" type="text" className="inputSearch"/>
                </div>

                {/* <div className="rightElements">
                    <button className="btnServices">Serviços</button>
                </div> */}
            </div>
            
        );
    }
}

export default Header;