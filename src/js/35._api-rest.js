
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

getPost('http://localhost:8092/api/v1/cliente/12')

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