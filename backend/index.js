//min 45:00 de https://www.youtube.com/watch?v=khCIunNAEHI


const express= require('express');
const app= express();
const cors = require('cors');
const morgan = require('morgan');
const {mongoose}= require('./database');

// Settings
app.set('port',process.env.PORT || 3000);



// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));





// Routes

app.use('/api/employees', require('./routes/employee.routes'))


//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port' ,app.get('port'))
})