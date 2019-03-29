import React, { Component } from 'react';
import styled from 'styled-components';

import LArrowimg from "../Resources/leftarrow.png";
import RArrowimg from "../Resources/rightarrow.png";

const StyFooter = styled.div`
    background-color: #00b700;
    position: absolute;
    height: 17%;
    width: 100%;
    top: 83%;
    display: flex;
    
    @media (max-width: 700px) {
        top: 72%;
        height: 13%;
    }
`;

const StyLArrow = styled.img`
    max-height: 100%;
    border-radius: 100%;
    flex: 0.5;
    
    &:hover{
        background-color: rgba(0, 107, 24, 0.40);
    }
`;

const StyRArrow = styled.img`
    max-height: 100%;
    border-radius: 100%;
    flex: 0.5;
    
    &:hover{
        background-color: rgba(0, 107, 24, 0.40);
    }
`;

const StyMid = styled.div`
    flex: 4;
`;

class Footer extends Component {
    render() {
        return (
            <StyFooter>
                <StyLArrow src={LArrowimg} onClick={() => this.props.updatePage(this.props.name)} alt={"Left Arrow"}/>
                <StyMid/>
                <StyRArrow src={RArrowimg} onClick={() => this.props.updatePage(this.props.name)} alt={"Right Arrow"}/>
            </StyFooter>
        );
    }
}

export default Footer;