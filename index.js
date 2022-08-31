const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000

const DB_USER = 'felipe'
const DB_PASSWORD = encodeURIComponent('geeGWVyf3zoRpt5w')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

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


