require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require("cors")
const routes = require("./Routes/Routes")
const app = express();
const port = process.env.PORT || 3001;
const passport = require("passport");
const session = require("express-session");


app.use(cors())
app.use(json())


massive(process.env.CONNECTION_STRING).then(dbinstance =>{
    app.set("db",dbinstance)
})

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());



routes(app)

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
