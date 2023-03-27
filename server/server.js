const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getPlants, addPlants, deletePlant } = require('./controller')

app.get('/api/plants', getPlants)
app.post('/api/plants', addPlants)
app.delete('/api/plants/:id', deletePlant)

const PORT = 6000;

app.listen(PORT, () => console.log('server listening on port 6000'))