const calculadora = (operacao, valorA, valorB) => {

  if(operacao === '+') {
    return valorA + valorB;
  }

  return 'executou a funcao';
}

export default calculadora;