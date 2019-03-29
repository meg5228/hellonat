import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';


const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyHome = styled.div`    
    font-family: Helvetica;
`;

const StyHeader = styled.div`
    text-align: center;
    height: 13vh;
    background-color: #00b700;
    color: #FFFFFF;
    font-size: 8vh;
    line-height: 13vh;
`;

const StyText = styled.div`
    animation: ${fadein} 2s linear;
`;

class Home extends Component {
    render() {
        return (
            <StyHome>
                <StyHeader>Hello Nat!</StyHeader>
                <StyText>Hey girl heres some text for you and itll fade in</StyText>
            </StyHome>
        );
    }
}

export default Home;