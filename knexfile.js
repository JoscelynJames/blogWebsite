// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gblogdb'
  },
  production: {
    client: 'pg',
    connection: 'postgres://bsopcikjhqwaiv:4810a39ba0c85c97b34464ec2387d8a5f54e3e4f640835e2b751e1aa0effb022@ec2-54-225-192-243.compute-1.amazonaws.com:5432/d4hh0h7j3etb53'
  },
  migrations: {
    tableName: 'knex_migrations'
  }

}
