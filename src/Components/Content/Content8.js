import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Media from "react-media";

const StyView = styled.div`
    text-align: center;
`;

class Content8 extends Component {
    render(){
        return(
            <StyView>
                <Media query="(max-width: 700px)">
                    {matches =>
                        matches ? (
                            <ReactPlayer style={{marginTop: '22vh'}} height='26vh' width='100vw' url='https://www.youtube.com/watch?v=W6_9NFIbihM&feature=youtu.be' controls playing loop />
                        ) : (
                            <ReactPlayer style={{marginLeft:'7vw'}} width='150vh' height='83vh' url='https://www.youtube.com/watch?v=W6_9NFIbihM&feature=youtu.be' controls playing loop/>
                        )
                    }
                </Media>
            </StyView>
        );
    }
}



export default Content8;
