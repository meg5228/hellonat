import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyView = styled.div`
    text-align: center;
`;

class Content5 extends Component {
    render(){
        return(
            <StyView>
                Facebook
                <ReactPlayer style={{marginLeft:'7vw'}} width='150vh' height='83vh' url='https://m.facebook.com/story.php?story_fbid=1906370912780567&id=100002230317207' controls playing loop/>
            </StyView>
        );
    }
}



export default Content5;
