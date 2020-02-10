import axios from "axios"

const GET_USER= "GET_USER"
const LOG_OUT= "LOG_OUT"

export function get_user(){
    return{
        type:GET_USER,
        payload:axios.get("/me")
    }
}

export function log_out(){
    return{
        type:LOG_OUT,
        payload:axios.get("/logout")
    }
}

const initial_state={
    user:{},
    is_auth:false
}

export default function user_reducer(state=initial_state,action){
    switch(action.type){
        case `${GET_USER}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				is_auth: true
			};
		case `${GET_USER}_REJECTED`:
			return {
				...state,
				is_auth: false
			};

		case `${LOG_OUT}_FULFILLED`:
			return {
				...state,
				user: action.payload.data,
				is_auth: true
			};

		default:
			return state;
    }
}