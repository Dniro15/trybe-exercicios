// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const funtionCheck = (numero, sorteio) => {
    return numero === sorteio;
}

const bingo = (numero, funtionCheck) => {
    const nSorteio = Math.floor((Math.random() * 2) + 1);

    return funtionCheck(numero, nSorteio) ? 'Parabéns você ganhou' : 'Tente novamente';
}; 

console.log(bingo(2, funtionCheck));