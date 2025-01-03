function status(request, response) {
  console.log(response.json);
  response.status(200).json("Alunos Acima da média");
}

export default status;
