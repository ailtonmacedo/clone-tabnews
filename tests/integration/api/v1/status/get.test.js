test("GET to /api/v1/status should return 200", async () => {
  //arrange

  // act
  const response = await fetch("http://localhost:3000/api/v1/status");

  //asserts
  //Expect = Valor dinámico -> toBe = Valor Estático
  expect(response.status).toBe(200);
});
