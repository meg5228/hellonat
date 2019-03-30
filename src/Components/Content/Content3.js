import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';

const StyView = styled.div`
    text-align: center;
`;

class Content3 extends Component {
    render(){
        return(
            <StyView>
                Twitter
                <TwitterVideoEmbed id="1040134227663237120" />
            </StyView>
        );
    }
}



export default Content3;
