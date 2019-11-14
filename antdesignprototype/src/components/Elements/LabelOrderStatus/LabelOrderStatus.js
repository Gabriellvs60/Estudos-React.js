import React, { Component } from 'react';

//Importing Themes
import colors from '../../Themes/Colors';
//Import Components from styles
import {Label} from '../styles';

export default class LabelOrderStatus extends Component {
    render() {
        return (
        <div>
            <Label backgroundcolor="#4556AC">
                Aberto
            </Label>

            <Label backgroundcolor="#E2863B">
                Pronto
            </Label>

            <Label backgroundcolor="#AC4545">
                Atraso
            </Label>

            <Label backgroundcolor={ colors().green }>
                Entregue
            </Label>
        </div>    
        );
    }
}
