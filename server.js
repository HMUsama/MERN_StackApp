const express =    require('express')
const mongoose =   require('mongoose')
const path  =      require('path');
const config =     require('config')
// const bodyParser = require('body-parser');

// const items = require('./routes/api/items');

const app  = express();
//BodyParser Middleware
// app.use(bodyParser.json());
app.use(express.json());

//DB Config
// const db = require('./config/key').mongoURI;
const db = config.get('mongoURI');
//connect to mongo
mongoose.connect(db,{useCreateIndex:true})
        .then(()   =>console.log("MongoDB Connect..."))
        .catch(err =>console.log("ERROR--------------->>",err))
//Use Routes
app.use('/api/auth' ,require('./routes/api/auth')); 
app.use('/api/users',require('./routes/api/users')); 
app.use('/api/items',require('./routes/api/items')); 

const port = process.env.PORT || 5000;

app.listen(port , () =>console.log(`server started on port ${port}`));
