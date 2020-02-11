import React from "react";
import { connect } from "react-redux";
import { read_items } from "../../Redux/ducks/item_reducer";

class All_items extends React.Component {
  componentDidMount() {
    this.props.read_items();
  }
  render() {
    console.log(this.props.item_reducer);
    const { items } = this.props.item_reducer;
    let displayItems = items.map(item => {
      return (
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <div>
            <iframe
              style={{
                width: "600",
                height: "450",
                frameBorder: "0"
              }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBeD9u5LDIyQ-j3IilorlITsuyG5YCIWis
                &q=2809+owen+ln+Mesquite,TX"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    });
    return <div>{displayItems}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { read_items })(All_items);
