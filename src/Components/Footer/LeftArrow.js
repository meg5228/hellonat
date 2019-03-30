import React, { Component } from 'react';
import styled from 'styled-components';

import LArrowimg from '../../Resources/leftarrow.png';

const StyLArrow = styled.img`
    max-height: 100%;
    border-radius: 100%;
    flex: 0.5;
    
    &:hover{
        background-color: rgba(0, 107, 24, 0.40);
    }
`;

class LArrow extends Component {
    render() {
        return (
            <StyLArrow src={LArrowimg} onClick={(event) => { this.props.updatePage(this.props.name); this.props.updateIndexL();}} alt={"Left Arrow"}/>
        );
    }
}

export default LArrow;