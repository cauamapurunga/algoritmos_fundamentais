window.onload = function() {
    document.getElementById('selection-screen').style.display = 'flex'; // Exibe a tela de seleção
    document.getElementById('javascript-buttons').style.display = 'none'; // Oculta os botões JavaScript
    document.getElementById('java-buttons').style.display = 'none'; // Oculta os botões Java
};

function selectLanguage(language) {
    document.getElementById('selection-screen').style.display = 'none';

    if (language === 'javascript') {
        document.getElementById('javascript-buttons').style.display = 'flex'; // Mostra botões JavaScript
    } else if (language === 'java') {
        document.getElementById('java-buttons').style.display = 'flex'; // Mostra botões Java
    }
}

function goBack() {
    document.getElementById('selection-screen').style.display = 'flex'; // Mostra a tela de seleção
    document.getElementById('javascript-buttons').style.display = 'none'; // Oculta botões JavaScript
    document.getElementById('java-buttons').style.display = 'none'; // Oculta botões Java
}

// Função para Contagem
function Contagem() {
    const n = parseInt(prompt("Digite o número de elementos no conjunto de dados:"));
    if (isNaN(n) || n <= 0) {
        alert("Número inválido de elementos.");
        return;
    }

    const numeros = [];
    for (let i = 0; i < n; i++) {
        const numero = parseInt(prompt(`Digite o elemento ${i + 1}:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Valor inválido. Tente novamente.");
            i--;
        }
    }

    const primeiro = numeros[0];
    let menor = Math.min(primeiro, n);
    let maior = Math.max(primeiro, n);

    let contagem = 0;
    for (const numero of numeros) {
        if (menor <= numero && numero <= maior) {
            contagem++;
        }
    }

    alert(`Existem ${contagem} valores inteiros entre ${menor} e ${maior} no conjunto`);
}
  
// Função para Divisor Comum
function DivisorComum() {
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");

    if (n1 === null || n2 === null) {
        alert("Operação cancelada.");
        return;
    }

    n1 = parseInt(n1, 10);
    n2 = parseInt(n2, 10);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let resto;
    while (n2 !== 0) {
        resto = n1 % n2;
        n1 = n2;
        n2 = resto;
    }

    alert(`O MDC entre os números é: ${n1}`);
}
  
// Função para Fibonacci
function Fibonacci() {
    let n = prompt("Digite o número de termos para a sequência Fibonacci: ");
    
    if (n === null) {
        alert("Operação cancelada.");
        return;
    }

    n = parseInt(n, 10);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let a = 0, b = 1, c;
    let resultado = "Sequência Fibonacci: ";

    for (let i = 0; i < n; i++) {
        resultado += a + " ";
        c = a + b;
        a = b;
        b = c;
    }

    alert(resultado);
}

// Função para Número Primo
function NumPrimo() {
    let n = prompt("Digite um número para verificar se é primo: ");
    
    if (n === null) {
        alert("Operação cancelada.");
        return;
    }

    n = parseInt(n, 10);

    if (isNaN(n) || n <= 1) {
        alert("Por favor, insira um número válido maior que 1.");
        return;
    }

    let div = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            div++;
        }
    }

    if (div === 2) {
        alert(`O número ${n} é primo.`);
    } else {
        alert(`O número ${n} não é primo.`);
    }
}

// Função para Ordenação
function Ordenacao() {
    let tamanho = prompt("Digite o tamanho do vetor: ");
    
    if (tamanho === null) {
        alert("Operação cancelada.");
        return;
    }

    tamanho = parseInt(tamanho, 10);

    if (isNaN(tamanho) || tamanho <= 0) {
        alert("Por favor, insira um tamanho válido.");
        return;
    }

    const vetor = [];

    for (let i = 0; i < tamanho; i++) {
        let elemento = prompt(`Digite o ${i + 1}º elemento do vetor: `);

        if (elemento === null) {
            alert("Operação cancelada.");
            return;
        }

        elemento = parseInt(elemento, 10);

        if (isNaN(elemento)) {
            alert("Por favor, insira um número válido.");
            i--;
        } else {
            vetor.push(elemento);
        }
    }

    let resultado = "Vetor original: " + vetor.join(" ");

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }

    resultado += "\nVetor ordenado: " + vetor.join(" ");
    alert(resultado);
}

// Função para Somatório
function Somatorio() {
    let n = prompt("Quantos números você quer somar: ");
    
    if (n === null) {
        alert("Operação cancelada.");
        return;
    }

    n = parseInt(n, 10);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let soma = 0;

    for (let i = 1; i <= n; i++) {
        let num = prompt(`Digite o ${i}º número: `);

        if (num === null) {
            alert("Operação cancelada.");
            return;
        }

        num = parseInt(num, 10);

        if (isNaN(num)) {
            alert("Por favor, insira um número válido.");
            i--;
        } else {
            soma += num;
        }
    }

    alert(`A soma dos números é: ${soma}`);
}

// Função par ou ímpar
function ParOuImpar() {
    let n = prompt("Digite um número para verificar se é par ou ímpar: ");
    
    if (n === null) {
        alert("Operação cancelada.");
        return;
    }

    n = parseInt(n, 10);

    if (isNaN(n)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (n % 2 === 0) {
        alert(`O número ${n} é par.`);
    } else {
        alert(`O número ${n} é ímpar.`);
    }
}