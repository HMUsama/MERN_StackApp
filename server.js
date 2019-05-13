const express =    require('express')
const mongoose =   require('mongoose')
const path  = require('path');
// const bodyParser = require('body-parser');
const config = require('config')

// const items = require('./routes/api/items');

const app  = express();

//BodyParser Middleware

// app.use(bodyParser.json());
app.use(express.json());

//DB Config

// const db = require('./config/key').mongoURI;
const db = config.get('mongoURI');

//connect to mongo
mongoose
    .connect(db,
        {useCreateIndex:true,
            // useNewUrlParser:true`
        }
        )
    .then(() =>console.log("MongoDB Connect..."))
    .catch(err =>console.log("ERROR--------------->>",err))

//Use Routes
app.use('/api/items',require('./routes/api/items')); 
app.use('/api/users',require('./routes/api/users')); 
app.use('/api/auth',require('./routes/api/auth')); 

const port = process.env.PORT || 5000;

app.listen(port , () =>console.log(`server started on port ${port}`));