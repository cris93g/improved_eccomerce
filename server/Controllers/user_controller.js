const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

const strat = new Auth0Strategy(
	{
		clientID: CLIENT_ID,
		clientSecret: CLIENT_SECRET,
		domain: DOMAIN,
		callbackURL: '/login',
		scope: 'openid profile'
	},
	(accessToken, refreshToken, extraParams, profile, done) => {
		done(null, profile);
	}
);

const getUser = (req, res) => {
	if (req.user) res.status(200).json(req.user);
	else res.status(403).json({ message: 'Not Logged In' });
};

const logout = (req, res) => {
	req.session.destroy(() => {
		res.redirect('http://localhost:3000/#/');
		// res.redirect("/#/");
	});
};

passport.use(strat);

passport.serializeUser((req, profile, done) => {
	const db = req.app.get('db');
	db.read_user(profile.id).then((user) => {
		if (!user[0]) {
			db
				.insert_user(profile.displayName, profile.id, profile.picture)
				.then((response) => {
					return done(null, response[0]);
				})
				.catch((err) => console.log(err));
		} else {
			return done(null, user[0]);
		}
	});
});

// Put user on req.session
passport.deserializeUser((user, done) => {
	done(null, user);
});

module.exports = {
	getUser,
	logout
};
