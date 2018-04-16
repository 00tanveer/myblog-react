import React, {Component} from 'react';
import Landing from './pages/Landing';
import CodePage from './pages/CodePage';
import PhotoPage from './pages/PhotoPage';
import BookReviewsPage from './pages/BookReviewsPage';
import LifePage from './pages/LifePage';
import ContactPage from './pages/ContactPage';

import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
    render(){
        return (
            <div>
                <Route exact strict path='/' component={Landing}/>
                <Route exact strict path='/code' component={CodePage}/>
                <Route exact strict path='/photography' component={PhotoPage}/>
                <Route exact strict path='/bookreviews' component={BookReviewsPage} />
                <Route exact strict path='/life' component={LifePage} />
                <Route exact strict path='/contact' component={ContactPage} />
            </div>
        );
    }
}

export default App;