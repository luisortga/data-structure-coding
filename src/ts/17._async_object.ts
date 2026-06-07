interface BladeRunner {
    runner: string;
    emanador: string;
    sobreviviente: string;
    replicantes?: string; // opcional
}

const bladeRunner = (): Promise<BladeRunner> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                runner: "agent KD6-3.7",
                emanador: "Joi",
                sobreviviente: "Rick Dechard"
            });
        }, 4000);
    });
};

async function runnable(): Promise<void> {
    try {
        const firstScene: BladeRunner = await bladeRunner();
        console.log(firstScene);

        const secondScene: BladeRunner = await bladeRunner();

        secondScene.runner = "Joe"; // cambiar valor
        secondScene.replicantes = "WALLACE";

        console.log(secondScene.runner);
        console.log(secondScene);

    } catch (error) {
        console.error(error);
    }
}

runnable();