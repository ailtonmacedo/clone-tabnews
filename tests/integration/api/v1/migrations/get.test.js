import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

describe("GET /api/v1/migrations", () => {
  test("Retrieving pending migrations", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");

    expect(response.status).toBe(200);

    const responseBoby = await response.json();

    expect(Array.isArray(responseBoby)).toBe(true);
    expect(responseBoby.length).toBeGreaterThan(0);
  });
});
