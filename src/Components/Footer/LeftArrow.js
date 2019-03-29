import React, { Component } from 'react';
import styled from 'styled-components';

import LArrowimg from '../../Resources/leftarrow.png';

const StyLArrow = styled.img`
    max-height: 100%;
    border: solid red;
    flex: 1;
`;

class LArrow extends Component {
    render() {
        return (
            <StyLArrow src={LArrowimg} onClick={() => this.props.updatePage(this.props.name)} alt={"Left Arrow"}/>
        );
    }
}

export default LArrow;