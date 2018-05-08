import React from 'react';
import Button from '../../components/ui/Button';
import axios from 'axios';
class CodePage extends React.Component {
    state = {
      blogs: []
    }
  
  componentDidMount(){
    axios.get('/blogs/blogs')
      .then(res => {
        //console.log(res.data.data.docs[0]);
        const blogs = res.data.data.docs;
        this.setState({blogs});
        console.log(this.state.blogs);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() { 
      return (
        <div>
          <Button link label='Post a blog' to='/code/post'/>
          <ul>
            {this.state.blogs.map(blog => <li>{blog.title}</li>)}
          </ul>
        </div>
    );
  }
}

export default CodePage;