import React from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
//import Form from '../../components/forms/Form';
import withAuth from '../../components/HOC/withAuth';

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
      <button className="ql-code-block" />
      <button className="ql-align" />
      <button className="ql-image" />
      <button className="ql-link" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
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
        this.login = this.login.bind(this);
    }

    //AUTH
    login(){
        this.props.auth.login();
    }

    //LIFECYCLE HOOKS
    componentDidMount(){
        this.attachQuillRefs();
        axios.get('/blogs/blogs')
            .then(res => {
                console.log('hoga');
                console.log(res.data);
                console.log(res.data[0]);
                this.quillRef.setContents(res.data.data[0].delta_ops);
            })
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
      console.log(this.quillRef.getContents().ops);

      let blog = {
          title: 'blog',
          body: '',
          delta_ops: this.quillRef.getContents().ops
      }
      console.log(blog);
      axios.put('/blogs/blogs', {blog})
        .then(res => {
            console.log(res);
        })
    }

    imageHandler(){
        const input = document.createElement('input');
        input.setAttribute('type','file');
        input.click();

        input.onchange = () => {
            const file = input.files[0];

            if(/^image\//.test(file.type)){
                this.saveToServer(file);
            } else {
                console.warn('You can only upload images.');
            }
        };
    }

    saveToServer(file) {
        const fd = new FormData();
        fd.append('image', file);
  
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/upload/image', true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            // this is callback data: url
            const url = JSON.parse(xhr.responseText).data;
            this.insertToEditor(url);
          }
        };
        xhr.send(fd);
    }

    insertToEditor(url) {
        // push image url to rich editor.
        const range = this.quillRef.getEditor.getSelection();
        this.quillRef.getEditor.insertEmbed(range.index, 'image', `http://localhost:9000${url}`);
    }

    render(){
        return(
            <div className="container">
                <div className="text-editor">
                    <CustomToolbar />
                    &nbsp;
                    <ReactQuill
                        ref={(el) => {this.reactQuillRef = el}}
                        onChange={this.handleChange}
                        modules={Editor.modules}
                        formats={Editor.formats}
                        defaultValue={this.state.editorHtml}/>
                </div>
            </div>
        );
    }
}

Editor.modules = {
    toolbar: {
        container: '#toolbar',
        handlers: {
            'image': this.imageHandler
        }
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

export default withAuth(Editor);
