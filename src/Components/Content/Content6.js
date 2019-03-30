import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';

const StyView = styled.div`
    text-align: center;
`;

class Content6 extends Component {
    render(){
        return(
            <StyView>
                Twitter6
                <TwitterVideoEmbed id="1040459972646121474" />
            </StyView>
        );
    }
}



export default Content6;
