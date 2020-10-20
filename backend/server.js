const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const session = require('express-session');

//Express App config
app.use(bodyParser.json());
app.use(session({
    secret: 'puki benda',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(cookieParser('puki benda'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

const postRoutes = require('./api/post/post.routes');
const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');

//Routes
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

const logger = require('./services/logger.service');
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port);
});