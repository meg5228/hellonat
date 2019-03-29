import React, { Component } from 'react';
import styled from 'styled-components';
import VIEWS from "./Views";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const StyApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currPage: VIEWS.HOME};

        this.updatePage = this.updatePage.bind(this);
    }

    updatePage(newPage){
        this.setState({currPage: newPage});
    }

    render(){
        return(
            <StyApp>
                <Content/>
                <Footer updatePage={this.updatePage}/>
            </StyApp>
        );
    }
}

export default App;