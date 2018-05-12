import React from 'react';
import Landing from './pages/Landing';
import AdminPage from './pages/AdminPage';
import CodePage from './pages/CodePage';
import PhotoPage from './pages/PhotoPage';
import BookReviewsPage from './pages/BookReviewsPage';
import LifePage from './pages/LifePage';
import ContactPage from './pages/ContactPage';
import Editor from './RichTextEditor/Editor';
import Callback from '../components/auth/Callback';

import {Route} from 'react-router-dom';
import AuthService from '../utils/AuthService';

const auth = new AuthService();

const handleAuthentication = ({location}) => {
    //console.log(location);
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }
class App extends React.Component {
    render(){
        const AdminPageSignup = (props) => {
            return(
                <AdminPage 
                    mode='signup'
                    {...props}
                />
            );
        }

        const AdminPageLogin = (props) => {
            return(
                <AdminPage 
                    mode='login'
                    {...props}
                />
            );
        }
        return (
            <div>
                <Route exact strict path='/' render={(props)=><Landing auth={auth} {...props} />}/>
                <Route exact strict path='/adminsignup' component={AdminPageSignup}/>
                <Route exact strict path='/adminlogin' component={AdminPageLogin}/>
                <Route exact strict path='/code' component={CodePage}/>
                <Route exact strict path='/post' render={(props)=><Editor auth={auth} {...props} />} />
                <Route exact strict path='/photography' component={PhotoPage}/>
                <Route exact strict path='/bookreviews' component={BookReviewsPage} />
                <Route exact strict path='/life' component={LifePage} />
                <Route exact strict path='/contact' component={ContactPage} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} /> 
                }}/>
            </div>
        );
    }
}

export default App;