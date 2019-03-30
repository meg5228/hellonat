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
    margin-right: 10%;
    margin-left: 10%;
`;

class Home extends Component {
    render() {
        return (
            <StyHome>
                <StyHeader>Hello Nat!</StyHeader>
                <StyText>Hi honey! I love you very much! I know I can't always be there when you're sad...
                    whether because I'm asleep, or away from my phone, or just plain not there to give you a hug.
                    So to hopefully help out, I made this website for you! It has all of your favorite funny pick-me-ups
                    on it, and lots of videos I know that you like. So feel free to hit one of the arrow buttons to move to the first one
                    that will hopefully help you start feeling better! <br/>
                    ~Love, Megan. </StyText>
            </StyHome>
        );
    }
}

export default Home;