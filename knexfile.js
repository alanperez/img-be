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
  }

};
