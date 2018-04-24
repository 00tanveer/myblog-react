import React from 'react';
import ReactQuill from 'react-quill';

const CustomToolbar = () => (
    <div id="toolbar">
      <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
        <option value="1" />
        <option value="2" />
        <option selected />
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <select className="ql-color">
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="orange" />
        <option value="violet" />
        <option value="#d0d1d2" />
        <option selected />
      </select>
      <button className="ql-blockquote" />
      <button className="ql-image" />
      <button className="ql-strike" />
    </div>
  );

class CodePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            text: ''
            //CustomToolbar: StyledCustomToolbar
    } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
      this.setState({ text: value })
    }
  
    // componentDidMount(){
    //     const StyledCustomToolbar = styled(CustomToolbar)`
    //         > .ql-toolbar .ql-snow{
    //             position: fixed;
    //             width: 100%;
    //             display: flex;
    //             justify-content: center;
    //             margin-bottom: 10px;
    //             z-index: 2;
    //             background-color: black;
    //         }
            
    //     `
    //     this.setState({CustomToolbar: StyledCustomToolbar});
    // }
    
    render() {

        
        return (
            
            <div className="text-editor">
                <CustomToolbar />
                &nbsp;
                <ReactQuill 
                    value={this.state.text}
                    onChange={this.handleChange} 
                    modules={CodePage.modules}
                    formats={CodePage.formats}/>
            </div>
      )
    }
  }

CodePage.modules = {
    toolbar: {
        container: "#toolbar"
    },
    clipboard: {
        matchVisual: false,
    }
};

  
CodePage.formats = [
   'header', 'font', 'size',
   'bold', 'italic', 'underline', 'strike', 'blockquote',
   'list', 'bullet', 'indent',
   'link', 'image', 'color',
]

  export default CodePage;