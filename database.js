import mysql from "mysql2";
import fs from "fs";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  ssl: {
    ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem"),
  },
});

export default connection;
