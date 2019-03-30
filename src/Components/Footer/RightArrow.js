import React, { Component } from 'react';
import styled from 'styled-components';

import RArrowimg from '../../Resources/rightarrow.png';

const StyRArrow = styled.img`
    max-height: 100%;
    border-radius: 100%;
    flex: 0.5;
    
    &:hover{
        background-color: rgba(0, 107, 24, 0.40);
    }
`;

class RArrow extends Component {
    render() {
        return (
            <StyRArrow src={RArrowimg} onClick={() => this.props.updatePage(this.props.name)} alt={"Left Arrow"}/>
        );
    }
}

export default RArrow;