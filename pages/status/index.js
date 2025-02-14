import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

// function Capslock(props) {
//   const textoEmCaplock = props.texto.toUpperCase();
//   return textoEmCaplock;
// }

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 100,
  });
  console.log(data);

  let updatedAtText = "Carregando...";
  let databaseVersion;
  let databaseMaxConnections;
  let databaseOpenedConnections;
  let loading = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.update_at).toLocaleString("pt-BR");
    databaseVersion = data.dependencies.database.version;
    databaseMaxConnections = data.dependencies.database.max_connections;
    databaseOpenedConnections = data.dependencies.database.opened_connections;
  }

  let div = (
    <div>
      <div>
        <h3>Última Atualização:</h3>
        <div>Date e Hora: {updatedAtText}</div>
      </div>
      <div>
        <h3>Banco de Dados:</h3>
        <ul>
          <li>Versão: {databaseVersion || loading}</li>
          <li>Máximo de Conexões: {databaseMaxConnections || loading}</li>
          <li>Conexões Abertas: {databaseOpenedConnections || loading}</li>
        </ul>
      </div>
    </div>
  );

  return div;
}
