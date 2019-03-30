import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';

const StyView = styled.div`
    text-align: center;
    margin-left: 35vw;
`;

class Content6 extends Component {
    render(){
        return(
            <StyView>
                <TwitterVideoEmbed id="1040459972646121474" />
            </StyView>
        );
    }
}



export default Content6;
