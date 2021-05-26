const Tasks = ["Lavar a Louça", "Comprar Leite"]

const newTask = process.argv[2]

if (newTask) {
    Tasks.push(`${newTask}`)

    console.log(`Tarefa adicionada com sucesso!`)
    console.log(`${Tasks}`)
} else {
    console.log(`Precisa adicionar uma nova tarefa...`)
}