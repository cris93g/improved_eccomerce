import React from 'react';
import { connect } from 'react-redux';
import { read_items } from '../../Redux/ducks/item_reducer';
import { Link } from 'react-router-dom';

class All_items extends React.Component {
	componentDidMount() {
		this.props.read_items();
	}
	render() {
		const { items } = this.props.item_reducer;
		let displayItems = items.map((item) => {
			return (
				<div>
					<p>{item.username}</p>
					<p>{item.description}</p>
					<p>{item.price}</p>
					<div />
					<Link to={`/youritems`}>next page</Link>
				</div>
			);
		});
		return <div>{displayItems}</div>;
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { read_items })(All_items);
