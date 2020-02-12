import React from 'react';
import axios from 'axios';
class Spec_item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/spec_items`, {
				id: this.props.match.params.id
			})
			.then((response) => {
				this.setState({ item: response.data });
			});
	}
	render() {
		console.log(this.state);
		const { item } = this.state;
		let display_item = item.map((i) => {
			return (
				<div>
					<p>{i.name}</p>
					<p>{i.description}</p>
				</div>
			);
		});
		return <div>{display_item}</div>;
	}
}

export default Spec_item;
