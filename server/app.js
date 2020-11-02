const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbService = require('./services/db.service')
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Blog = require('./resolvers/Blog');
const Post = require('./resolvers/Post');
const User = require('./resolvers/User');
const Subscription = require('./resolvers/Subscription');
const app = express();
app.use(bodyParser.json());
app.use(cookieParser('teddy bear'))
const PORT = 3060

const corsOptions = {
    origin: ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
};
app.use(cors(corsOptions));
app.request.dbService = dbService
const resolvers = {
    Query,
    Mutation,
    User,
    Blog,
    Post,
    Subscription
}

// const cookies = new cookieParser()
const typeDefs = importSchema('./schema.graphql')

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
// app.use('/', (req, res) => {
//     res.cookie('token', 1234);
//     const token = req.cookies.token
//     console.log(typeof token);
//     res.send("hi")
// })

app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    // rootValue,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`app is lisetning to port ${PORT}`);
})

