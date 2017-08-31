const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});