function add_item(req, res) {
	const db = req.app.get('db');
	// let id = req.session.passport.user.owner_id;
	const { name, picture, description, id, price, form_contact, adress } = req.body;
	db
		.insert_items([ name, picture, description, id, price, form_contact, adress ])
		.then((results) => {
			res.status(200).send(results);
		})
		.catch(console.error);
}

function read_items(req, res) {
	const db = req.app.get('db');
	db
		.read_items()
		.then((results) => {
			res.status(200).send(results);
		})
		.catch(console.error);
}

function read_users(req, res) {
	const db = req.app.get('db');
	db
		.read_users()
		.then((results) => {
			res.status(200).send(results);
		})
		.catch(console.error);
}

function get_specific(req, res) {
	const db = req.app.get('db');
	const { id } = req.body;
	db.read_specific([ id ]).then((results) => {
		res.status(200).send(results);
	});
}

function get_item_from_user(req, res) {
	const db = req.app.get('db');
	db
		.read_item_from_user(req.session.passport.user.owner_id)
		.then((results) => res.status(200).send(results))
		.catch(console.error);
}
module.exports = {
	add_item,
	read_items,
	read_users,
	get_item_from_user,
	get_specific
};
