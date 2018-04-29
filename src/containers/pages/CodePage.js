import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
class CodePage extends React.Component {
    
    render() { 
      const Button = styled.button`
        display: inline-block;
        color: white;
        background-color: black;
        margin: 1em;
        border: 1px solid white;
        border-radius: 3px;
        font-size: 2rem;
        padding: 1rem;
      `
      const LinkButton = Button.withComponent(Link);
      const StyledLinkButton = LinkButton.extend`
        text-decoration: none;
      `;

        return (
          <div>
            <StyledLinkButton to='/code/post'>Post a blog</StyledLinkButton>
          </div>
      );
    }
  }

export default CodePage;