const lista = [
    {
        name: 'chocolate',
        preco: 14,
    },
    {
        name: 'biscoito',
        preco: 7,
    },
    {
        name: 'cereal',
        preco: 9,
    },
];

const saldoDisponivel = 50;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));