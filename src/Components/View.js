import React, { Component } from 'react';
import styled from 'styled-components';
import VIEWS from '../Views';
import Home from "./Home/Home";
import Content from "./Content/Content";
import Content1 from "./Content/Content1";
import Content2 from "./Content/Content2";
import Content3 from "./Content/Content3";
import Content4 from "./Content/Content4";
import Content5 from "./Content/Content5";
import Content6 from "./Content/Content6";
import Content7 from "./Content/Content7";
import Content8 from "./Content/Content8";

const StyView = styled.div`
    text-align: center;
`;

class View extends Component {

    selectContent(){
        switch(this.props.content[this.props.index]){
            case 0:
                console.log("Content0");
                return <Content/>;
            case 1:
                console.log("Content1");
                return <Content1/>;
            case 2:
                console.log("Content2");
                return <Content2/>;
            case 3:
                console.log("Content3");
                return <Content3/>;
            case 4:
                console.log("Content4");
                return <Content4/>;
            case 5:
                console.log("Content5");
                return <Content5/>;
            case 6:
                console.log("Content6");
                return <Content6/>;
            case 7:
                console.log("Content7");
                return <Content7/>;
            case 8:
                console.log("Content8");
                return <Content8/>;
            default:
                console.log("Contentdef");
                return <Content/>;
        }
    }

    selectPage(){
        switch (this.props.currPage) {

            case VIEWS.CONTENT:
                return this.selectContent();
            case VIEWS.HOME:
                return <Home/>;
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

export default View;
