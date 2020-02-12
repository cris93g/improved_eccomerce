import axios from 'axios';

const READ_ITEMS = 'READ_ITEMS';
const READ_USERS = 'READ_USERS';
const ADD_ITEM = 'ADD_ITEM';
const GET_ITEM_FROM_USER = 'GET_ITEM_FROM_USER';

export function read_items() {
	return {
		type: READ_ITEMS,
		payload: axios.get(`/api/fetch_items`)
	};
}

export function get_item_from_user() {
	return {
		type: GET_ITEM_FROM_USER,
		payload: axios.get(`/api/fetch_item`)
	};
}

export function add_item(name, picture, description, owner_id, price, form_contact, adress) {
	return {
		type: ADD_ITEM,
		payload: axios.post(`http://localhost:3001/api/fetch_items`, {
			name,
			picture,
			description,
			owner_id,
			price,
			form_contact,
			adress
		})
	};
}

const initial_state = {
	items: [],
	is_loading: false
};

export default function item_reducer(state = initial_state, action) {
	switch (action.type) {
		case `READ_ITEMS_PENDING`:
			return { ...state, is_loading: true };
		case `READ_ITEMS_FULFILLED`:
			return { ...state, items: action.payload.data, is_loading: false };
		case `READ_ITEMS_REJECTED`:
			return { ...state, is_loading: true };
		case `GET_ITEM_FROM_USER_PENDING`:
			return { ...state, is_loading: true };
		case `GET_ITEM_FROM_USER_FULFILLED`:
			return { ...state, items: action.payload.data, is_loading: false };
		case `GET_ITEM_FROM_USER_REJECTED`:
			return { ...state, is_loading: true };
		default:
			return state;
	}
}
