import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyView = styled.div`
    text-align: center;
`;

class Content8 extends Component {
    render(){
        return(
            <StyView>
                <ReactPlayer style={{marginLeft:'7vw'}} width='150vh' height='83vh' url='https://www.youtube.com/watch?v=W6_9NFIbihM&feature=youtu.be' playing loop/>
            </StyView>
        );
    }
}



export default Content8;
