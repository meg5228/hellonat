import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterVideoEmbed } from 'react-twitter-embed';
import Media from "react-media";

const StyView = styled.div`
    text-align: center;
`;

const StyBig = styled.div`margin-left: 35vw;`;

class Content7 extends Component {
    render(){
        return(
            <StyView>
                <Media query="(max-width: 700px)">
                    {matches =>
                        matches ? (
                            <TwitterVideoEmbed id="1041428488652238848" />
                        ) : (
                            <StyBig><TwitterVideoEmbed id="1041428488652238848" /></StyBig>
                        )
                    }
                </Media>

            </StyView>
        );
    }
}



export default Content7;
