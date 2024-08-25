const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

app.use(express.json())

const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')

app.use('/api/users/' , userRoute)
app.use('/api/transactions',transactionsRoute)

 
const PORT  = process.env.PORT || 5000

if(process.env.NODE_ENV === 'production')
{
     app.use('/' , express.static('client/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
     })
}



const DATABASE_URL = "mongodb+srv://sumit:sumit@money-1.ik15izv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))