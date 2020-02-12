import React from 'react';
import { connect } from 'react-redux';
import { get_user } from '../../Redux/ducks/user_reducer';

class Auth extends React.Component {
	componentDidMount() {
		this.props.get_user();
	}
	render() {
		const { REACT_APP_LOGIN, REACT_APP_LOGOUT } = process.env;
		const { username, pic } = this.props.user_reducer.user;

		return (
			<div>
				{username ? (
					<div>
						<div>
							<p>Welcome, {username}</p>
							<img style={{ maxWidth: '50PX', borderRadius: '50px' }} src={pic} />
						</div>
						<div>
							<a href={REACT_APP_LOGOUT}>Logout</a>
						</div>
					</div>
				) : (
					<div>
						<a href={REACT_APP_LOGIN}>Login</a>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { get_user })(Auth);
