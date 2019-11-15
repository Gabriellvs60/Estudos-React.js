import React, { Component } from 'react';
//Importing Themes
import colors from '../../Themes/Colors';
//Import Components from styles
import { Label } from '../../../styled/StyledOrderCard';

export default class LabelOrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: props.status,
          text: props.text
        };
      }
    
    render() {
        if (this.state.status === "OPEN"){
            console.log("OPENED");
            return (
                <div>
                    <Label backgroundcolor={colors().blue}>
                        {this.state.text}
                    </Label>
                </div>
            )
        }
        if (this.state.status === "READY"){
            console.log("READY");
            return (
                <div>
                    <Label backgroundcolor={colors().yellow}>
                        {this.state.text}
                    </Label>
                </div>
            )
        }
        if (this.state.status === "LATE"){
            console.log("LATE");
            return (
                <div>
                    <Label backgroundcolor={colors().red}>
                        {this.state.text}
                    </Label>
                </div>
            )
        }
        if (this.state.status === "OK"){
            console.log("OK");
            return (
                <div>
                    <Label backgroundcolor={colors().green}>
                        {this.state.text}
                    </Label>
                </div>
            )
        }
        

                {/* <Label backgroundcolor={colors().yellow}>
                Pronto
            </Label>

            <Label backgroundcolor={colors().red}>
                Atraso
            </Label>

            <Label backgroundcolor={ colors().green }>
                Entregue
            </Label> */}
            
        
    }
}
