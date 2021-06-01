//Array criado
// const frutas = ['Uva','Banana','Pera'];

//Forma padrão que eu usaria 
// for(i = 0; i < frutas.length; i ++){
//     console.log(frutas[i]);
// }

//Forma similar ao angular
// for(let alimentos of frutas){
//     console.log(alimentos);
// }

//map
// for(let alimentos of frutas){
//     console.log(frutas.map(alimentos => 'Fruta: ' + alimentos));
// }

// const produtos = [

//     {
//         nome: "notebook",
//         preco: 2100
//     },
//     {
//         nome: "smartphone",
//         preco: 400
//     }

// ]


// const valorEmReal = produtos.map(p => p.preco * 4);

// console.log(valorEmReal);
// console.log(produtos);

const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am' + this.name);
    }
};

// const printName = (personData) => {
//     console.log(personData.name)

// }

// printName(person);

const printName = ({ name }) => {
    console.log(name)
}

printName(person);

const {  name, age } = person;
console.log(name, age);

// const exibirNome = person.name;
// console.log(exibirNome);
// console.log(person.name);

// const copiedPerson = {... person};
// console.log(copiedPerson);

//slice() simplemente copia um array
// const hobbies = ['Sports', 'Cooking'];

// console.log(hobbies);

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// uma forma mais usada são os ...
// const copiedArrayTwo = [...hobbies];
// console.log(copiedArrayTwo);

//... também pode ser usado em argumentos, assim uda o sentido de como ele foi usado antes para copiar a class ou o array
//aqui ele serve para não limitar o numero de argumentos passado para um metodo

//forma sem o ...
// const toArray = (arg1, arg2,arg3) =>{
//     return [arg1,arg2,arg3];
// };

// console.log(toArray(1,2,3));

// com o ...
// const toArray = (...args) =>{
//     return args;
// };

// console.log(toArray(1, 2, 3, 4, 5));
