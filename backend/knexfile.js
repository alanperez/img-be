require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "2023-img-be",
      user: "postgres",
      password: "password",
      host: "localhost",
      port: 5432,
    },
    migrations: { directory: "src/data/migrations" },
    seeds: { directory: "src/data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },
  production: {
    client: "pg",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
    migrations: { directory: "src/data/migrations" },
    seeds: { directory: "src/data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
