import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';

import Media from "react-media";

const StyView = styled.div`
    text-align: center;
`;

const StyBig = styled.div`margin-left: 35vw;`;

class Content3 extends Component {
    render(){
        return(
            <StyView>
                <Media query="(max-width: 700px)">
                    {matches =>
                        matches ? (
                            <TwitterVideoEmbed id="1040134227663237120" />
                        ) : (
                            <StyBig><TwitterVideoEmbed id="1040134227663237120" /></StyBig>
                        )
                    }
                </Media>
            </StyView>
        );
    }
}



export default Content3;
