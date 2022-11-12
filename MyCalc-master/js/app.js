// Variáveis
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
const operations = ['.', '*', '/', '-', '+', '%'];
const operatorByFunction = {
  '*': (num1, num2) => multiplication(num1, num2),
  '/': (num1, num2) => division(num1, num2),
  '-': (num1, num2) => subtraction(num1, num2),
  '+': (num1, num2) => sum(num1, num2),
  '%': (num1, num2) => percent(num1, num2),
  default: () => console.log('nada')
}
let lastResult = 0
let lastOperator = ''
let lasOperatorIndex = null

// Visor da calculadora
let realTimeScreenValue = [];

// Limpar
clearbtn.addEventListener('click', () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.className = 'currentInput';
  answerScreen.className = 'answerScreen';
  answerScreen.style.color = ' rgba(150, 150, 150, 0.87)';
});

// Função anexada a todos os botões
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Se o botão clicado não é o botão de apagar
    if (!btn.id.match('erase')) {
      // Mostrar o valor do botão pressionado
      v = currentInput.innerHTML;

      lestItem = v[v?.length - 1];
      
      if (operations.includes(lestItem) && isNaN(btn.value)) return
      
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join('');
      
      // Executar e mostrar a resposta em tempo real
      if (btn.classList.contains('num_btn')) {
        codigoRepetido()
      }
    }

    // Quando o evento for um botão
    if (btn.id.match('erase') && lastOperator) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
      // codigoRepetido()
    }

    // Ao clicar em igual
    if (btn.id.match('evaluate')) {
      currentInput.className = 'answerScreen';
      answerScreen.className = 'currentInput';
      answerScreen.style.color = 'white';
    }
  });
});


const codigoRepetido = (action) => {
  lastOperator = v.split('').reverse().find(x => operations.includes(x))
  lasOperatorIndex = currentInput.innerHTML.lastIndexOf(lastOperator)
  const a = currentInput.innerHTML
  
  const num1 = lastResult || a.split('')[lasOperatorIndex - 1]
  const num2 = a.split('')[lasOperatorIndex + 1]

  if (!num2) return firstNumber(num1)

  if (!lastOperator) return

  operatorByFunction[lastOperator](num1, num2)
}

const firstNumber = (num) => {
  answerScreen.innerHTML = num
  lastResult = num
}

const showResult = (result) => {
  answerScreen.innerHTML = result
  lastResult = result
}

const sum = (num1, num2) => {
  const result = Number(num1) + Number(num2)
  showResult(result)
}

const subtraction = (num1, num2) => {
  const result = Number(num1) - Number(num2)
  showResult(result)
}

const division = (num1, num2) => {
  const result = Number(num1) / Number(num2)
  showResult(result)
}

const multiplication = (num1, num2) => {
  const result = Number(num1) * Number(num2)
  console.log(result, num1, num2)
  showResult(result)
}

const percent = () => {

}
