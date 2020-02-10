import React from "react"
import {connect} from "react-redux"
import {read_items} from "../../Redux/ducks/item_reducer"

class All_items extends React.Component{
    componentDidMount(){
        this.props.read_items()
    }
    render(){ 
        console.log(this.props)   
        return(
            <div>
                <p>All items</p>
            </div>
        )
    }
}

export default All_items