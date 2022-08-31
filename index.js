const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000

const DB_USER = 'felipe'
const DB_PASSWORD = encodeURIComponent('geeGWVyf3zoRpt5w')

const Person = require('./models/Person');

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.post('/person', async (req, res) => {
    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved
    }

    try {
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})

app.get('/', (req, res) => {
    res.json({ message: "Oi Express" })
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.em574cg.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao mongo");
        app.listen(port, () => console.log(`App listening on port ${port}!`))
    })
    .catch((err) => {
        console.log(err);
    })


