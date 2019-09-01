const path = require('path');
const { Pool } = require('pg');
const connectionString = 'postgresql://localhost:5432/poketest';

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
    name VARCHAR(20) NOT NULL,
    type1 VARCHAR(10) NOT NULL,
    type2 VARCHAR(10),
    imageurl VARCHAR(200),
    sprite VARCHAR(200),
    stats VARCHAR(90)
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