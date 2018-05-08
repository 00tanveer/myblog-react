import React from 'react';
import Menu from '../../components/navigation/Menu';
import styled from 'styled-components';

// const H1 = styled.h1`

//   position: absolute;
//   top: 50%;
//   left: 50%;
//   //height: 100px;
//   //width: 100px;
//   transform: translate(-50%, 50%);
//   color: white;
//   font-family: 'Lato', sans-serif;
//   font-weight: 200;
//   font-size: 13rem;
//   text-align: center;
// `

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
    this.logout = this.logout.bind(this);
  }
  //AUTH
  logout(){
    console.log('baal');  
    this.props.auth.logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    console.log(isAuthenticated());
    return (
      <div style={{position: "relative"}}>
        <H2>TANVEER FAHAD HAQ</H2>
        <Menu/>
        {
          isAuthenticated() && (
            <button><a onClick={this.logout}>Log out</a></button> 
          )
        }
      </div>
    );
  }
}

export default Landing;
