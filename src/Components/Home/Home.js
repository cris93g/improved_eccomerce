import React,{useEffect,useState} from "react"
import All_items from "./All_items"
import axios from "axios"

const Home = ()=>{
const [items,set_items]=useState([])
console.log(items)

    return(
        <div>
            <p>Home</p>
            <All_items/>
        </div>
    )
}

export default Home