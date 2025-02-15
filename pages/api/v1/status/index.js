import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const dataBaseVersionResult = await database.query("SHOW server_version;");

  const dataBaseVersionValue = dataBaseVersionResult.rows[0].server_version;

  const dataBaseMaxConnectionsValue = await database.query(
    "SHOW max_connections;",
  );

  const dataBaseMaxConnectionsResult =
    dataBaseMaxConnectionsValue.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const dataBaseOpenConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const dataBaseOpenConnectionsValue =
    dataBaseOpenConnectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: dataBaseVersionValue,
        max_connections: parseInt(dataBaseMaxConnectionsResult),
        opened_connections: dataBaseOpenConnectionsValue,
      },
    },
  });
}

export default status;
