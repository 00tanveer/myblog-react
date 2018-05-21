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
        console.log(res.data.data);
        const blogs = res.data.data.docs;
        this.setState({blogs});
        console.log(this.state.blogs);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() { 
    const {isAuthenticated}  = this.props.auth;
      return (
        <div>
          {
            isAuthenticated() && (
              < Button link label = 'Post a blog'
              to = '/post' / >
            )
          }
          <ul>
            {this.state.blogs.map(blog => <li>{blog.title}</li>)}
          </ul>
        </div>
    );
  }
}

export default CodePage;