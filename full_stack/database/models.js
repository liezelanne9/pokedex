require('dotenv').config();

const path = require('path');
const { Pool } = require('pg');
const connectionString = process.env.DB_CONN;

const pool = new Pool({
  connectionString: connectionString
})

pool.on('connect', () => {
  console.log('~~~ Connected to PostgreSQL ~~~');
})

/* Seed with Pokemon data if table exists and is empty */
const insertAllPokemon = () => {
  const seedFile = path.resolve(__dirname, '../pokemon_data/data-from-api.csv');
  pool.query(
    `COPY pokemon FROM '${seedFile}' DELIMITER ',' CSV HEADER;`
  )
    .then(() => {
      console.log('Database seeded: TRUE');
    })
    .catch(err => {
      console.log(err)
    })
}

const createTable = () => {
  const createTable =
    `CREATE TABLE IF NOT EXISTS
  pokemon(
    id VARCHAR(4) PRIMARY KEY,
    name TEXT NOT NULL,
    type1 TEXT NOT NULL,
    type2 TEXT,
    imageurl VARCHAR(200),
    sprite VARCHAR(200),
    stats VARCHAR(100)
    )`;

  pool.query(createTable)
    .then(() => {
      // Seed with Pokemon data if table exists and is empty
      pool.query('SELECT * FROM pokemon;')
        .then(data => {
          data.rows.length === 0 ? insertAllPokemon() : console.log('Database seeded: False');
        })
    })
    .catch(err => {
      console.log(err);
    })
}

createTable();

module.exports = pool;