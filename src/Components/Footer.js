import React, { Component } from 'react';
import styled from 'styled-components';
import LArrow from './Footer/LeftArrow';
import RArrow from './Footer/RightArrow';
import VIEWS from "../Views";

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

const StyMid = styled.div`
    flex: 4;
`;

class Footer extends Component {
    render() {
        return (
            <StyFooter>
                <LArrow name = {VIEWS.CONTENT} updatePage = {this.props.updatePage} updateIndexL={this.props.updateIndexL}/>
                <StyMid/>
                <RArrow name = {VIEWS.CONTENT} updatePage = {this.props.updatePage} updateIndexR={this.props.updateIndexR}/>
            </StyFooter>
        );
    }
}

export default Footer;