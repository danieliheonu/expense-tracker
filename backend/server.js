const express = require('express');
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
const cors = require('cors');
const path = require('path')

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use('/api/v1/transactions', require('./routes/transactions'))

// if(process.env.NODE_ENV === 'production'){
app.use(express.static('../frontend/build'));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html')))
// }

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server listening on port ${process.env.PORT}`)
    } catch (err) {
        console.log(err);
    }
})