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
      <button className="ql-link" />
      <button className="ql-list" />
      <button className="ql-strike" />
    </div>
  );

class Editor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
           editorHtml: '',
           mountedEditor: false
        } // You can also pass a Quill Delta here
        
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this);
        this.attachQuillRefs = this.attachQuillRefs.bind(this);

        
    }
  
    //LIFECYCLE HOOKS
    componentDidMount(){
        this.attachQuillRefs();
    }

    componentDidUpdate(){
        this.attachQuillRefs();
    }
    //////////////////
    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // Skip if Quill reference is defined:
        if (this.quillRef != null) return;

        const quillRef = this.reactQuillRef.getEditor();
        if (quillRef != null) this.quillRef = quillRef;
    }

    handleChange(html) {
      this.setState({ editorHtml: html });
      console.log(this.quillRef.getContents());
    }

    render(){
        return(
            <div className="text-editor">
                <CustomToolbar />
                &nbsp;
                <ReactQuill 
                    ref={(el) => {this.reactQuillRef = el}}
                    value={this.state.text}
                    onChange={this.handleChange} 
                    modules={Editor.modules}
                    formats={Editor.formats}
                    defaultValue={this.state.editorHtml}/>
            </div>
        );
    }
}

Editor.modules = {
    toolbar: {
        container: '#toolbar'
    },
    clipboard: {
        matchVisual: false,
    }
};

// Editor.modules.toolbar = [
//     ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
//     ['blockquote', 'code-block'],                    // blocks
//     [{ 'header': 1 }, { 'header': 2 }],              // custom button values
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // lists
//     [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
//     [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
//     [{ 'direction': 'rtl' }],                        // text direction
//     [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
//     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
//     [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
//     [{ 'font': [] }],                                // font family
//     [{ 'align': [] }],                               // text align
//     ['clean'],                                       // remove formatting
// ]

  
Editor.formats = [
   'header', 'font', 'size',
   'bold', 'italic', 'underline', 'strike', 'blockquote',
   'list', 'bullet', 'indent',
   'link', 'image', 'color',
]

export default Editor;