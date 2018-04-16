import React, { Component } from 'react';
import Menu from '../../components/navigation/Menu';
import styled from 'styled-components';

const H1 = styled.h1`

  position: absolute;
  top: 50%;
  left: 50%;
  //height: 100px;
  //width: 100px;
  transform: translate(-50%, 50%);
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 200;
  font-size: 13rem;
  text-align: center;
`

const H2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 1rem;
`

class Landing extends Component {
  render() {
    return (
      <div style={{position: "relative"}}>
        <H1>ThE TeCH ALieN</H1>
        <H2>TANVEER FAHAD HAQ</H2>
        <Menu/>
      </div>
    );
  }
}

export default Landing;
