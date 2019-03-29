import React, { Component } from 'react';
import styled from 'styled-components';
import VIEWS from '../Views';
import Home from "./Home/Home";

const StyView = styled.div`
    text-align: center;
`;

class Content extends Component {
    selectPage(){
        switch (this.props.currPage) {
            case VIEWS.HOME:
                return <Home/>;
            case VIEWS.CONTENT:
                return <Content/>;
            default:
                return <Home/>;
        }
    }

    render(){
        return(
            <StyView>
                {this.selectPage()}
            </StyView>
        );
    }
}

export default Content;
