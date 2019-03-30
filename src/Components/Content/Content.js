import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Media from 'react-media';

const StyView = styled.div`
    text-align: center;
`;

class Content extends Component {
    render(){
        return(
            <StyView>
                <Media query="(max-width: 700px)">
                    {matches =>
                        matches ? (
                            <ReactPlayer style={{marginTop: '22vh'}} height='26vh' width='100vw' url='https://giant.gfycat.com/DapperOfficialBat.webm' playing loop />
                        ) : (
                            <ReactPlayer style={{marginLeft:'12vw'}} width='150vh' height='83vh' url='https://giant.gfycat.com/DapperOfficialBat.webm' playing loop />
                        )
                    }
                </Media>
            </StyView>
        );
    }
}


export default Content;
