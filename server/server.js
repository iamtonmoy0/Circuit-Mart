const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {readdirSync} = require('fs');
require('dotenv').config();
require('colors');

// app
const app = express();

// database
mongoose.connect(process.env.DATABASE,{
	useNewUrlParser: true,
})
.then(()=>console.log('Connected To Database Successful!'.green.bold))
.catch(error=>console.log(`DB Error :${error} ` .red.bold))

// middlewares 
app.use(bodyParser.json({limit:"2mb"})); // for parsing application/json
app.use(morgan('dev')); // for logging data
app.use(cors()) //cross origin policy


// route middlewares
readdirSync('./routes').map(fileName=>app.use('/api/v1',require('./routes/'+fileName)));

app.get('/',(re,res)=>{
	res.send('server is running!')
})

app.all('*',(req,res)=>{
	res.send('invalid route!')
})
// listening port
const port  = process.env.PORT;
app.listen(port,console.log(`Server is running on port: ${port} ` .blue.bold))