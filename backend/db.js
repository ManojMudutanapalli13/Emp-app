// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'swiftdata',
  host: 'ec2-13-233-217-54.ap-south-1.compute.amazonaws.com',
  database: 'WWIDEV',
  password: 'MepXTdaI1PPPU7P',
  port: 5432,
});

module.exports = pool;
