import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// const CustomToolbar = () => (
//     <div id="toolbar">
//       <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
//         <option value="1" />
//         <option value="2" />
//         <option selected />
//       </select>
//       <button className="ql-bold" />
//       <button className="ql-italic" />
//       <select className="ql-color">
//         <option value="red" />
//         <option value="green" />
//         <option value="blue" />
//         <option value="orange" />
//         <option value="violet" />
//         <option value="#d0d1d2" />
//         <option selected />
//       </select>
//       <button className="ql-blockquote" />
//       <button className="ql-image" />
//       <button className="ql-strike" />
//     </div>
//   );

class CodePage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //         text: ''
    //         //CustomToolbar: StyledCustomToolbar
    // } // You can also pass a Quill Delta here
    //   this.handleChange = this.handleChange.bind(this)
    // }
  
    // handleChange(value) {
    //   this.setState({ text: value })
    // }
    
    

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