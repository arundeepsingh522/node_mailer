const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const coreOptions = {
    origin: '*', // Allow requests from any origin, replace with specific origins if needed
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    
  };
app.use(cors(coreOptions));
const routes = require('./routes/routes');

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/',routes);

 


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})



