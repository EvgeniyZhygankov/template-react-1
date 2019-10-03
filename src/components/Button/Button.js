import React from "react";

import '../Button/Button.scss';

class Button extends React.Component {

    render() {
        
        return (

            <a className="btn">
                {this.props.label}
            </a>
        );
    }
}

export default Button;