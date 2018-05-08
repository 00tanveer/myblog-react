import React from 'react';
import axios from 'axios';
import Form from '../../components/forms/Form';
class AdminPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			mode: '',
			username: '',
			password: ''
		}
		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.setState({mode: this.props.mode == 'login' ? 'Login' : 'Signup'}, () => console.log(this.state));
	}
	
	usernameHandler(e){
		this.setState({username: e.target.value}, () => console.log(this.state.username));
		console.log('clickity');;
	}

	passwordHandler(e){
		this.setState({password: e.target.value}, () => console.log(this.state.password));
	}

	handleSubmit() {
		console.log('baalchanda');
		console.log(this.state);
		const user = {
			username: this.state.username,
			password: this.state.password
		}
		if(this.state.mode == 'Login'){

		} else {
			axios.post('/authenticate/signup', {user})
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
		}
		
	}

	render(){
		return(
			<Form 
				handleSubmit={this.handleSubmit}
				passwordHandler={this.passwordHandler}
				usernameHandler={this.usernameHandler}
				username={this.state.username}
				password={this.state.password}
				mode={this.state.mode} />
		);
	}
}

export default AdminPage;