import React, { Component } from 'react';
import './Header.css';
import { Row, Col } from 'antd';

class Header extends Component {
    render() {
        return (
            <div className="head">
                <div className="pedidos_serviços">
                    <div className="label-pedidos">
                        Pedidos
                    </div>
                    <div className="btn-servicos">
                        <button className="btnServices">Serviços</button>
                        
                    </div>
                </div>

                <div className="actions">
                    <button className="btnAction">Ordenar Por</button>
                    <button className="btnAction">Filtrar Por Serviço</button>
                    <input value="Pesquisar" type="text" className="inputSearch"/>
                    <div className="pagination-info">
                    <p>0 de 10</p>
                    </div>
                </div>

              
            </div>
            
        );
    }
}

export default Header;