import React, {Component} from 'react';
import Menu from '../../components/navigation/Menu';

class CodePage extends React.Component {
    render(){
        return(
            <div>
                <h1 style={{color:"white"}}>Code Page</h1>
                <Menu />
            </div>
        );
    }
}

export default CodePage;