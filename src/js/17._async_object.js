// 

const bladeRunner = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                runner: "KD6-3.7",
                emanador: "Ana de armas",
                sobreviviente: "Harryson Ford"
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

    } catch (error) {
        console.error(error)
    }
}

runnable()