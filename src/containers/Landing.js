import React, { Component } from 'react';
import Menu from '../components/navigation/Menu';
import styled from 'styled-components';

const Img = styled.img`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`

class Landing extends Component {
  render() {
    return (
      <div>
        <Img src="bitmoji_1.jpg" alt="Smiley face">
        </Img>
        <Menu/>
      </div>
    );
  }
}

export default Landing;
