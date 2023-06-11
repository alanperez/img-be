require('dotenv').config({ path: './.env' });
module.exports = {

  
  development: {
    client: 'mysql',
    connection: {
      database: 'img-be',
      user: 'user',
      password: 'password',
      host: 'localhost',
      port: 3306
    } ,
    migrations: { directory: 'src/data/migrations' },
    seeds: { directory: 'src/data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },  production: {
    client: 'mysql',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    } ,
    migrations: { directory: 'src/data/migrations' },
    seeds: { directory: 'src/data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  }

};
