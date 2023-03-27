const plantContainer = document.querySelector('#plant-pic-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:6000/api/plant`

const plantCallback = ({ data: plants }) => displayMovies(plants)
const errCallback = err => console.log(err.response.data)

const getAllPlants = () => axios.get(baseURL).then(plantCallback).catch(errCallback)
const createPlant = body => axios.post(baseURL, body).then(plantCallback).catch(errCallback)
const deletePlant = id => axios.delete(`${baseURL}/${id}`).then(plantCallback).catch(errCallback)

const addPlantBtn = document.getElementById('addPlantButton')

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    let description = document.querySelector('#description')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value,
        description: description.value
    }

    createPlant(bodyObj)

    title.value = ''
    imageURL.value = ''
    description = ''
}


function createPlantCard(plant){
    const plantCard = document.createElement('div')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `<img alt='plant picture' src=${plant.imageURL} class="plant-picture"/>
    <p class="plant-title">${plant.title}</p>
    <button onclick="deleteMovie(${movie.id})">delete</button>
    `

    plantContainer.appendChild(plantCard)
}

function displayPlants(arr) {
    plantContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlantCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPlants()