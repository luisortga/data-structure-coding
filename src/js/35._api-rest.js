
//

// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Metodos HTTP: GET - POST- PUT
// PATCH - HEAD -DELETE - TRACE - OPTIONS

// HTTP Response

// funciones de manera nativa de protocolo http

let url = "http://localhost:8092/api/v1/cliente/24"

/* fetch(url)
	.then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error', err)) */


// 
async function getPost(url) {
	try {
	const response = await fetch(url)

	const data = await response.json()

	console.log(data)

	} catch (err) {
		console.log('error ', err)
	} 
}

// getPost('http://localhost:8092/api/v1/cliente/12')

// Solicitud post

async function createPost(url) {
	try {

	const newPost = {
		nombre: "Corey",
		apellido: "Tylor",
		correo: "silent-trees@microsoft.com",
		fechaRegistro: "2026-08-26T06:00:00.000Z"
	}

	const response = await fetch(url, { method : "POST", 
	headers: {
		"Content-Type" : "application/json"
	},
	body : JSON.stringify(newPost)
	})


	const data = await response.json()

	console.log(data)

	} catch (err) {
		console.log('error ', err)
	}
}

// createPost('http://localhost:8092/api/v1/cliente')

// Mensajes de error
/*
fetch('http://localhost:8092/api/v1/cliente/446')
	.then(response => {
		if (!response.ok) throw Error(`Not successful ${response.status}`)
		return response.json()
	})
    // .then(data => console.log(data))
    .catch(err => console.log('Error', err)) */

// https://jsonplaceholder.typicode.com//posts/1

async function partialPostUpdate() {
    try {

    const newPost = {
        userId: 1,
        title: "Imperio Viltrum",
        body: "regente Thragg"
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ title: "Titulo del imperio Viltrumita" })
    })

    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log("error", error)
    }
}

partialPostUpdate()

//

async function getWeather(city) {
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log("error", error)
    }
}

getWeather("London")