const plants = ('./db.json')
let globalId = 10

module.exports = {
    getPlants: (req, res) => {
        res.status(200).send(plants)
    }, 

    addPlants: (req, res) => {
        const { title, imageURL, desciption } = req.params
        if(!title || !imageURL || !desciption){
            res.sendStatus(400)
        }
        const copy = {...req.body, id: globalId}
        plants.push(copy)
        globalId++
        res.status(200).send(plants)
    }, 

    deletePlant: (req, res) => {
        const { id } = req.params
        const idx = plants.findIndex(plant => plant.id === +id)
        if(idx >= 0){
            plants.splice(idx, 1)
            res.status(200).send(plants)
        } else {
            res.sendStatus(404)
        } 
    }
}
