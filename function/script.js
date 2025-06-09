const numero1 = 10
const numero2 = 20

function somaNumeros(){
console.log(`a soma do numero: ${numero1} + ${numero2} = ${numero1 + numero2}`)
} 
somaNumeros();

//----------------------------------------------

function subtrair (num1, num2){
console.log(`a subtração do número: ${num1} - ${num2} = ${num1 - num2}`)
}
 subtrair(50, 20);
 subtrair(10, 5);
    
 //----------------------------------------------
 
 const cadastro = ["Jefferson", "Bruno", 30, 1994, "Brasileiro"]

 function login (dados){
 console.log (`Fiste Name: ${dados[0]}\nLast Name: ${dados[1]}\nIdade: ${dados[2]}\nNascimento: ${dados[3]}\nNacionalidade: ${dados[4]}\n`)
 }
 login(cadastro);

  //----------------------------------------------

 const dadosCarro = {
    modelo: "Fusca",
    ano: 1994,
    cor: "amarelo"
 };

 function meuCarro (carro){
    console.log (`Modelo: ${carro.modelo}\nAno: ${carro.ano}\nCor: ${carro.cor}`);
    const km = "18.000";
    return { ... carro, km}; // assim consigo colocar o elemento diretamente dentro do obj
 };
 const todoCar = meuCarro(dadosCarro);
 console.log(todoCar.km)
 console.log(todoCar);
 
 //------------------------------------------------
 