const { assert } = require("console");
var readline = require("readline");

const regex = {
	operators: /[\+\-\*\/]/,
	numbers: /[0-9]/,
};

const formatNumber = (n) => (n.length === 4 ? n : n.padStart(4, "0"));

function convertBinary(n) {
	const binaryNumberConvert = n.toString(2);
	if (n < 0) {
		const binaryNumberPositive = n.toString(2).slice(1);
		const binaryNumberPositiveConvert = binaryNumberPositive.toString(2);
		console.log("SLICE", binaryNumberPositive);

		const binaryNumberArray =
			binaryNumberPositive.length === 4
				? binaryNumberPositive.split("")
				: `0${binaryNumberPositive}`.split("");

		for (let i in binaryNumberArray) {
			binaryNumberArray[i] == 0
				? (binaryNumberArray[i] = 1)
				: (binaryNumberArray[i] = 0);
		}

		const binaryInvertPositiveNumber = binaryNumberArray.join("");
		const someOne =
			parseInt(`${binaryInvertPositiveNumber}`, 2) + parseInt(`0001`, 2);

		console.log("BINARY", binaryInvertPositiveNumber);

		return eval(someOne).toString(2);

		//	return
	}
	return binaryNumberConvert;
}

function evaluateBinaryValues(a) {
	let operator = a.split(/[0-9]/).join("").split("");
	// document.write(operator)
	let values = a.split(/[\+\-\*\/]/);
	let str = parseInt(values[0], 2);
	let j = 1;
	console.log("S", str);
	for (let i = 0; i < operator.length; i++) {
		str += operator[i] + parseInt(values[j], 2);
		j++;
	}

	console.log("STR", str);
	return convertBinary(eval(str));
}

function calculadora(binaryOperation) {
	console.log(binaryOperation.charAt());
	if (binaryOperation.charAt() === "-") {
		//se for um numero negativo, precisa tirar o '-' pra função debaixo reconhecer o operador
		const newBinaryOperation = binaryOperation.slice(1);

		//procurando pelo index do operador na string
		let operatorIndex = newBinaryOperation.search(regex.operators);

		//retornando o operador de acordo com o index retornado acima
		let operator = newBinaryOperation.charAt(operatorIndex);

		//agora pegando os numeros e os separando
		let separateNumbersArray = binaryOperation.split(operator);

		const binaryNumbers = [];

		let convertNumbersArray = separateNumbersArray.map((number) => {
			//	console.log("NUMBER", Number(number), convertBinary(Number(number)));
			binaryNumbers.push(convertBinary(Number(number)));
		});

		let op = parseInt(binaryNumbers[0], 2);
		const formatN = formatNumber(binaryNumbers[1]);
		console.log("FORMAT", formatN);
		op += operator + parseFloat(formatN, 2);

		console.log("NEW", convertBinary(eval(op)), op);
	}
	//procurando pelo index do operador na string
	let operatorIndex = binaryOperation.search(regex.operators);
	//retornando o operador de acordo com o index retornado acima
	let operator = binaryOperation.charAt(operatorIndex);

	//pegando os números que devem ser somados
	let integerNumbers = binaryOperation.search(regex.numbers);
	console.log("NUMEROS", integerNumbers);

	// //pega o primeiro numero do vertor acima e transforam em um inteiro
	// let str = parseInt(values[0], 2);

	// //começa por 1 porque agora temos que pegar o outro numero
	// let j = 1;

	// //percorre um vetor (?) para juntar a operação
	// for (let i = 0; i < operator.length; i++) {
	// 	str += operator[i] + parseInt(values[j], 2);
	// 	j++;
	// }

	// //eval pega uma string e avalia seu conteudo. Se for uma operação, ela reconhece.
	console.log("CONVERT");
}

var resp = "";

var leitor = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

leitor.question("Digite a operação que deseja\n", function (answer) {
	//resp = answer;
	console.log(
		//"\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil",
		calculadora(answer)
		//		evaluateBinaryValues(answer)
	);
	leitor.close();
});
