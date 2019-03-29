import React, { Component } from 'react';
import styled from 'styled-components';

import RArrowimg from '../../Resources/rightarrow.png';

const StyRArrow = styled.img`
    max-height: 100%;
    border: solid black;
    flex: 1;
`;

class RArrow extends Component {
    render() {
        return (
            <StyRArrow src={RArrowimg} onClick={() => this.props.updatePage(this.props.name)} alt={"Left Arrow"}/>
        );
    }
}

export default RArrow;