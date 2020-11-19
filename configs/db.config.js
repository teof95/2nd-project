const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGOURIATLAS, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));



// process.env.MONGOURIATLAS ||
// ||'mongodb://localhost/drugsdb'