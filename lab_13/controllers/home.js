const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://qmbmimzjyxevsj:ca03f1dd7bf99cfeb9e2ec02e8ea4132420fee2f9d919952ab8294260d2adfd7@ec2-54-235-247-209.compute-1.amazonaws.com:5432/du4qqcq5kld8g',
  ssl: true,
});
client.connect();

const homePage = (reqquest, response) => {
  client.query('SELECT datname FROM pg_database WHERE datistemplate = false LIMIT 10;', (err, databases) => {
    if (err) throw err;
    client.query('SELECT * FROM information_schema.columns LIMIT 10;', (err, tables) => {
      if (err) throw err;
      response.render('index', {
        data: databases.rows,
        tables: tables.rows,
      });
    });
  });
};

module.exports = {
  homePage,
};
