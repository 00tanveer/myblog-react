import React, { Component } from 'react';
import Menu from '../../components/navigation/Menu';

class PhotoPage extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "white" }}>Photography Page</h1>
                <Menu />
            </div>
        );
    }
}

export default PhotoPage;