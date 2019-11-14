import React, { Component } from 'react';

//Importing Themes
import colors from '../../Themes/Colors';

//Importing Elements
import LabelOrderStatus from '../../Elements/LabelOrderStatus/LabelOrderStatus';

class Content extends Component {
    render() {
        return (
            <div>
                <h1>I am the Body and this is my label</h1>
                <div><LabelOrderStatus/></div>
            </div>
        );
    }
}

export default Content;