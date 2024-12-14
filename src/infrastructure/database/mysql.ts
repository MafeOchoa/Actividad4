import { createPool } from 'mysql2/promise';

const poolMySql = createPool({
  host: "172.21.192.1",
  port: 3306,
  user: "root",
  password: "!Lucia14062000",
  database: "libreria",
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
});

export default poolMySql;
