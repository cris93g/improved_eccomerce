import React from "react";
import { connect } from "react-redux";
import { read_items } from "../../Redux/ducks/item_reducer";

class All_items extends React.Component {
  componentDidMount() {
    this.props.read_items();
  }
  render() {
    console.log(this.props.item_reducer);
    return (
      <div>
        <p>All items</p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { read_items })(All_items);
