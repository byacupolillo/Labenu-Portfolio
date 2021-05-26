const operation = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])

switch( operation ){
    case 'add': 
        const add = numberOne + numberTwo;
        console.log(`Resposta: ${add}`);
        break;
    case 'sub': 
        const sub = numberOne - numberTwo;
        console.log(`Resposta: ${sub}`);
        break;
    case 'mult':
        const mult = numberOne * numberTwo;
        console.log(`Resposta: ${mult}`);
        break;
    case 'div':
        const div = numberOne / numberTwo;
        console.log(`Resposta: ${div}`);
        break;
}
