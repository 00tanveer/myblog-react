import React from 'react';
import loading from './loading.svg';
import styled from 'styled-components';

class Callback extends React.Component {

  render() {

    const StyledLoading = styled.div`
      position: absolute;
      display: flex;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: black;
    `;
    return (
      <StyledLoading>
        <div>
          <img src={loading} alt="loading"/>
        </div>
      </StyledLoading>
    );
  }
}

export default Callback;