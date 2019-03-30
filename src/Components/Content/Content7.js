import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';

const StyView = styled.div`
    text-align: center;
`;

class Content7 extends Component {
    render(){
        return(
            <StyView>
                Twitter7
                <TwitterVideoEmbed id="1041428488652238848" />
            </StyView>
        );
    }
}



export default Content7;
