import React from 'react';
import { connect } from 'react-redux';
import { get_item_from_user } from '../../Redux/ducks/item_reducer';
import { Link } from 'react-router-dom';

class Your_items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			items: {}
		};
	}
	componentDidMount() {
		this.props.get_item_from_user();
	}
	render() {
		const { items } = this.props.item_reducer;
		let display_items = items.map((item) => {
			return (
				<div>
					<Link to={`/item/${item.id}`}>
						<p>{item.name}</p>
						<p>{item.description}</p>
						<p>{item.price}</p>
					</Link>
				</div>
			);
		});
		return <div>{display_items}</div>;
	}
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { get_item_from_user })(Your_items);
