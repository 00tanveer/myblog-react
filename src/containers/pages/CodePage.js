import React from 'react';
import Button from '../../components/ui/Button';
import Gallery from '../../components/ui/gallery/Gallery';
import axios from 'axios';


class CodePage extends React.Component {
    state = {
      blogs: []
    }
  
  componentDidMount(){
    
  }
  render() { 
      return (
        <div style={{color: 'white', fontSize: '5em'}}>
          Hello
          <Gallery />
        </div>
    );
  }
}

export default CodePage;