import React, { Component } from 'react';
import styled from 'styled-components';
import VIEWS from "./Views";
import View from "./Components/View";
import Footer from "./Components/Footer";
import _ from "lodash";

const StyApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currPage: VIEWS.HOME,
                    index: 0,
                    content: _.shuffle([1,2,3,4,5,6,7,8,9])};

        this.updatePage = this.updatePage.bind(this);
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(){
        let newIndex = this.state.index + 1;
        if(newIndex === 9){
            this.setState({index: 0});
        }
        else {
            this.setState({index: newIndex});
        }
    }

    updatePage(newPage){
        this.setState({currPage: newPage});
    }

    render(){
        return(
            <StyApp>
                <View currPage={this.state.currPage}/>
                <Footer updatePage={this.updatePage} updateIndex={this.updateIndex}/>
            </StyApp>
        );
    }
}

export default App;