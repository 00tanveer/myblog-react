import React from 'react';
import Menu from '../../components/navigation/Menu';
import styled from 'styled-components';

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

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: true
    }
    this.logout = this.logout.bind(this);
  }
  //AUTH
  logout(){  
    this.props.auth.logout();
    this.setState({authenticated: false});
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    console.log(isAuthenticated());
    return (
      <div style={{position: "relative"}}>
        <H2>tansayshello</H2>
        <Menu/>
        {
          isAuthenticated() && (
            <button onClick={this.logout}>Log out</button> 
          )
        }
      </div>
    );
  }
}

export default Landing;
