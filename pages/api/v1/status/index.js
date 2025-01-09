import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result);
  console.log("database -> " + database);
  console.log("request -> " + request);
  console.log("response -> " + response);
  response.status(200).json({ chave: "Alunos Acima da média" });
}

export default status;
