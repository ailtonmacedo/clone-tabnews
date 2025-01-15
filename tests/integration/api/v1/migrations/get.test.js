//arrange
// act
//Expect = Valor dinámico -> toBe = Valor Estático

test("Teste - GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBoby = await response.json();
  console.log(responseBoby);

  expect(Array.isArray(responseBoby)).toBe(true);
});
