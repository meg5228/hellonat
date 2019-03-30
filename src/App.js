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
                    content: _.shuffle([0,1,2,3,4,5,6,7,8])};

        this.updatePage = this.updatePage.bind(this);
        this.updateIndexR = this.updateIndexR.bind(this);
        this.updateIndexL = this.updateIndexL.bind(this);
    }

    updateIndexR(){
        let newIndex = this.state.index + 1;
        if(newIndex === 9){
            this.setState({index: 0});
        }
        else {
            this.setState({index: newIndex});
        }
    }

    updateIndexL(){
        let newIndex = this.state.index - 1;
        if(newIndex === -1){
            this.setState({index: 8});
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
                <View currPage={this.state.currPage} content={this.state.content} index={this.state.index}/>
                <Footer updatePage={this.updatePage} updateIndexR={this.updateIndexR} updateIndexL={this.updateIndexL}/>
            </StyApp>
        );
    }
}

export default App;