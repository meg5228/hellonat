import React, { Component } from 'react';
import styled from 'styled-components';

const StyView = styled.div`
    text-align: center;
`;

class Content1 extends Component {
    render(){
        return(
            <StyView>
                <iframe width="340" height="700" src="https://www.tiktok.com/embed/6669277556140674310" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </StyView>
        );
    }
}



export default Content1;
