const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const uuid = require('node-uuid');
const appData = require('./data.json');

// Create app data (mimics a DB)
const userData = appData.users;
const commentsData = appData.comments;
const shopsData = appData.shops; 

function getUser(username) {
  const user = userData.find(u => u.username === username);
  return Object.assign({}, user);
}

// Create default port
const PORT = process.env.PORT || 3000;

// Create a new server
const server = express();

// Configure server
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(session({
  secret: process.env.SESSION_SECRET || 'awesomecookiesecret',
  resave: false,
  saveUninitialized: false,
}));
server.use(flash());
server.use(express.static('public'));
server.use(passport.initialize());
server.use(passport.session());
server.set('views', __dirname + '/app/views');
server.set('view engine', 'pug');



// Configure Passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = getUser(username);

    if (!user || user.password !== password) {
      return done(null, false, { message: 'You are not Goo or you dont know that password is Floris' });
    }

    delete user.password;

    return done(null, user);
  }
));

// Serialize user in session
passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = getUser(username);

  delete user.password;

  done(null, user);
});






// Create custom middleware functions

function canDelete(req, res, next) {
  const { scopes, username } = req.user;
  const { id } = req.params;
  const comments = commentsData.find(exc => exc.id === id);

  if (!comments) {
    return res.sendStatus(404);
  }

  if (comments.user !== username && !scopes.includes('delete')) {
    return res.status(403).json({ message: "You can't delete that comments." });
  }

  return next();
}

function isAuthenticated(req, res, next) {
  if (!req.user) {
    req.flash('error', 'You must be logged in.');
    return res.redirect('/');
  }

  return next();
}



// LOGIN BLOCK
// Create home route
server.get('/', (req, res) => {
  if (req.user) {
    return res.redirect('/dashboard');
  }

  return res.render('index');
});

server.get('/dashboard',
  isAuthenticated,
  (req, res) => {
    res.render('dashboard');
  }
);

const authRoutes = express.Router();

authRoutes.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
    failureFlash: true,
  })
);

server.use('/auth', authRoutes);





// Create API routes
const apiRoutes = express.Router();

apiRoutes.use(isAuthenticated);

apiRoutes.get('/me', (req, res) => {
  res.json({ user: req.user });
});

// Get all of a user's comments
apiRoutes.get('/comments',
  (req, res) => {
    const comments = commentsData;

    res.json({ comments });
  }
);

apiRoutes.get('/shops',
  (req, res) => {
    const shops = shopsData;

    res.json({ shops });
  }
);

// Add an comments
apiRoutes.post('/comments',
  (req, res) => {
    const { username } = req.user;
    const { text } = req.body;
    const comments = {
      id: uuid.v4(),
      text,
      user: username,
    };

    commentsData.unshift(comments);

    res.status(201).json({ commets });
  }
);

// Delete an comments
apiRoutes.delete('/comments/:id',
  canDelete,
  (req, res) => {
    const { id } = req.params;
    const commentsIndex = commentsData.findIndex(exc => exc.id === id);

    commentsData.splice(commentsIndex, 1);

    res.sendStatus(204);
  }
);

server.use('/api', apiRoutes);


server.listen(PORT, () => {
  console.log(`The API is listening on port ${PORT}`);
});