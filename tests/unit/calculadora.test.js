const calculadora = require("../models/calculadora.js");

test("Somar 2 + 2, deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100, deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  console.log(resultado);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100, deve retornar Erro", () => {
  const resultado = calculadora.somar("banana", 100);
  console.log(resultado);
  expect(resultado).toBe("Erro");
});
