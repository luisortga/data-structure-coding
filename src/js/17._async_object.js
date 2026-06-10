// 

const bladeRunner = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                runner: "agent KD6-3.7",
                emanador: "Joi",
                sobreviviente: "Rick Dechard"
            })
        }, 4000)
    })
}

async function runnable() {
    try {
    let firtsScene = await bladeRunner()
    console.log(firtsScene)

    let secondScene = await bladeRunner()
    secondScene.runner = "Joe" // change value
    secondScene.replicantes = "WALLACE"
    console.log(secondScene.runner)

    let thredScene = await bladeRunner()

    } catch (error) {
        console.error(error)
    }
}

runnable()