const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'rpt13purp.clxq3tbepnvr.us-east-2.rds.amazonaws.com',
  user: 'bradyliu',
  password: '4r5t6y7u$R%T^Y&U',
  database: 'amazon',
});

connection.connect();

const insertIntoDB = (photoid, username, link, productTag, tagID) => {
  const sql = `INSERT INTO photos (photoid, link, username, productTag, tagID)
               VALUES ('${photoid}', '${link}', '${username}', '${productTag}', '${tagID}')`;
  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('record inserted successefully! from the db');
    }
  })
}

const queryDB = (id, cb) => {
  const sql = `SELECT link FROM photos WHERE tagID = ${id}`;
  connection.query(sql, (err, row) => {
    // console.log(row, 'data from queryDB');
    return err ? console.log(err) : cb(row);
  });
}

module.exports = {
  insertIntoDB,
  connection,
  queryDB
};