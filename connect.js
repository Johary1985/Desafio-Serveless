/* Conexao usando o postgresql-easy para iteragir melhor com o PostgreSQL, REF:https://github.com/mvolkmann/postgresql-easy */

const PgConnection = require('postgresql-easy');
const config = require('./db');
const pg = new PgConnection(config);
module.exports = pg;