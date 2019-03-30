import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from "react-player";

const StyView = styled.div`
    text-align: center;
`;

class Content extends Component {
    render(){
        return(
            <StyView>
                <ReactPlayer url='https://giant.gfycat.com/DapperOfficialBat.webm' playing loop/>
            </StyView>
        );
    }
}



export default Content;
