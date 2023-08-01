// config --> 개발에 관련된 환경설정에대한 정보를 관리한다.

const mysql = require("mysql2");

let conn = {
  host: "localhost",
  user: "root",
  password: "coavldjs3372!@",
  port: "3306",
  database: "nodejs_DB",
};

module.exports = {
  init: () => {
    return mysql.createConnection(conn);
  },
};
