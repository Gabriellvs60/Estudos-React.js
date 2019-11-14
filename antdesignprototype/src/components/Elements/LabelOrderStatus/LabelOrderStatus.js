import React, { Component } from 'react';

//Importing Themes
import colors from '../../Themes/Colors';
//Import Components from styles
import { Label } from '../styles';



export default class LabelOrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: props.status,
          text: props.text
        };
      }
    

    render() {
        return (
            <div>
                <Label backgroundcolor={colors().blue}>
                    {this.state.text}
                </Label>

                {/* <Label backgroundcolor={colors().yellow}>
                Pronto
            </Label>

            <Label backgroundcolor={colors().red}>
                Atraso
            </Label>

            <Label backgroundcolor={ colors().green }>
                Entregue
            </Label> */}
            </div>
        );
    }
}
